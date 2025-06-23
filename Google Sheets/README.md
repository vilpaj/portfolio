# Lootsheet

Tämän Google Sheetin tarkoituksena on helppottaa oman raid tiimin varusteiden seuraamista (Final Fantasy XIV).

Päätavoite oli selkeyttää kuka tarvitsee mitäkin, erityisesti Raid- ja Tome-tyyppisissä varusteissa.    
Raid: Droppaavat suoraan itse Savage- taistelusta    
Tome: Pelaaja hankkii perustason varusteen viikottain kertyvillä Tomestone -valuutalla. Näitä varusteita voidaan parantaa materiaalilla (Twine/Glaze), jotka ovat saatavilla Savage -taisteluista.

Tämän avulle pystytään seuraamaan kuka tarvitsee mitäkin, välttämään päällekkäiset hankinnat, varmistaan oikeudenmukainen jako ja varusteiden tason nousun tehokkaasti tiimin kesken.

**Ominaisuudet:**

Pelaajakohtainen seuranta: jokaisella on oma osionsa, jonne merkataan tarvittavat varusteet ja niiden tyypit.  
Jokainen pelaaja on myös jaettu omaan rooliin, tank, healer tai dps.  
Pelaajilla on myös oma laskuri, kuinka monta Twine/Glaze tarvitsee. Tämä on tärkeä osa koska molempia voi hyöntyää vain tietyn tyyppiisiin varusteisiin.    
Twine: Head -> Feet    
Glaze: Earring -> Ring

Kuka tarvitsee?: Listataan automaattisesti pelaajat joilta puuttuu tietty varuste, keskittyen "Raid" -tyyppiin.
Mikäli kyseinen varuste tyyppi on tyhjä (ei kenenkään nimeä), tämä tarkoittaa että varuste on FFA (Free For All) eli kuka tahansa voi ottaa sen itselleen.

Projektin tarkastelu:
Tämä projekti on luotu Google Sheetiä käyttäen, mutta mahdollisuus tarkastella eri muodoissa.  
.xlsx: Lataa tiedosto Microsoft Excel ja tarkastele siinä nähdäksesi kaavat ja muotoilut  
.csv: Lataa tiedosto nähdäksesi kevyt versio joka sisältää vain raakadatan

**Oppimani asiat ja kehitys:**
- SQL -opintojen hyödyntäminen (IF, IFS, AND, COUNTIF jne)
- selkeä layout
- Kuka tarvitsee -osio lisätty jälkikäteen (n. 1kk Sheetin luonnista), koska välillä sattui virheitä lootin jaossa joka huomattiin vasta jälkikäteen.

Mahdollinen kehittäminen keskittyisi monipuolisempaan yhteenvetoon (Kuka tarvitsee)-osioon ja datan tallentamiseen jälkitarkastelua varten (automatisointi).
