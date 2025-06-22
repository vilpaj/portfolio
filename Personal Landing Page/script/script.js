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