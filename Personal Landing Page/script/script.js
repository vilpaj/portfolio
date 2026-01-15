document.addEventListener('DOMContentLoaded', function(){
    const toggleButton = document.getElementById('openPopUp');
    const extraInfo = document.getElementById('divAddInfo');

//elementtien varmistus
    if(toggleButton && extraInfo){
        toggleButton.addEventListener('click', function(event){
            event.preventDefault();

            extraInfo.classList.toggle('hidden-info');
            extraInfo.classList.toggle('visible-info');
        })
    }
})

let translations = {};
let currentLang = "en";

async function loadLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    const response = await fetch(`lang/${lang}.json`);
    translations = await response.json();

    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll("[data-key]").forEach(el => {
        const path = el.dataset.key.split(".");
        let value = translations;

        for (const key of path) value = value?.[key];

        if (value) el.textContent = value;
    });

    const list = document.querySelector("#interest ul");
    if (list && translations.interest?.items) {
        list.innerHTML = "";
        translations.interest.items.forEach(text => {
            const li = document.createElement("li");
            li.textContent = text;
            list.appendChild(li);
        });
    }

    document.documentElement.lang = currentLang;
}

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang");
    const browser = navigator.language.startsWith("fi") ? "fi" : "en";
    loadLanguage(saved || browser);
});
