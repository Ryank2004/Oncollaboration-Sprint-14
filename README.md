> _Fork_ deze leertaak en ga aan de slag. 
Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. 
De instructie vind je in: [INSTRUCTIONS](https://github.com/fdnd-task/lose-your-head-the-client-case/blob/main/docs/INSTRUCTIONS.md)

# Oncollaboration
Oncollaboration is een platform waar radiologen uit Indonesie en Nederland bij elkaar samen kunnen komen om nieuwe ontwikkelingen te bespreken.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Changelog](#changelog)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Je kunt op dit platform webinars bekijken en vragen daarover stellen. Ook kun je contourings bekijken en hierover discussies houden.

### 📸 Home
<img width="300" alt="OnCollaboration Home iPhone SE" src="https://github.com/user-attachments/assets/62edf36e-d55e-4168-a511-5cc217003b9c">
<img width="600" alt="OnCollaboration Home MacBook Pro" src="https://github.com/user-attachments/assets/178795c5-86a1-4cfe-a511-229e72a37c55">

### 📸 Webinars
<img width="300" alt="OnCollaboration Webinars iPhone SE" src="https://github.com/user-attachments/assets/6dda7889-13e1-405d-821e-cbbbbdc824fa">
<img width="600" alt="OnCollaboration Webinars MacBook Pro" src="https://github.com/user-attachments/assets/ebf2c9b6-2710-47c3-9b0a-525e72bf9a72">

De website kun je live bekijken op 🌐 https://oncollaboration-sprint-14.vercel.app/ 

## Kenmerken
Bij het bouwen van deze website hebben we gebruik gemaakt van SvelteKit. We hebben gebruik gemaakt van componenten en we hebben de website dynamisch gemaakt met data uit Directus.
De database is opgebouwt uit 6 tabellen, waarvan je het datamodel [hier](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/24#issuecomment-2375264843) kunt vinden:
- [Webinars](https://fdnd-agency.directus.app/items/avl_webinars)
- [Speakers](https://fdnd-agency.directus.app/items/avl_speakers)
- [Contourings](https://fdnd-agency.directus.app/items/avl_contourings)
- [Comments](https://fdnd-agency.directus.app/items/avl_comments)
- [Categories](https://fdnd-agency.directus.app/items/avl_categories)
- [Users](https://fdnd-agency.directus.app/items/avl_users)

Tijdens het bouwen hebben we mobile first gewerkt. Ook hebben we Progressive Inhancement toegepast zodat iedereen deze website kan gebruiken.

## Installatie
Om aan dit project te werken kun je deze repo clonen. 
Zodra je dit hebt gedaan moet je alle benodigde bestande installeren met het comando `npm install`.
Als je dit heb gedaan kun je het op je localhost runnen met `npm run dev`.

## Gebruik
Op de website kun je scrollen door de webinars en contourings. Als het uiteindelijk af is kun je de webinars bekijken en vragen in de comments achterlaten. Ook kun je met je collegas de contourings bespreken.

## Changelog
Deze sprint hebben we een start gemaakt aan dit project. We hebben gewerkt aan de userstory: [Als gebruiker moet ik presentaties makkelijk kunnen terug vinden.](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/9) We hebben ons heel erg gefocust op het maken van de homepage, en het maken van componenten die we op verschillende platsen gaan gebruiken. Hier is een lijst van issues die wij hebben opgelost deze sprint:
- [Het maken van de Navigatiebalk](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/15)
- [Bouwen van kaartjes voor de contourings](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/14)
- [Bouwen van preview kaartjes voor de webinars](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/13)
- [De search tektbalk en knop bouwen](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/18)
- [Bouwen van filter html css](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/21)
- [Verschillende webinars en contourings inladen uit de database voor op de homepage](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/25)
- [Scroll lijst bouwen voor de preview kaartjes in html/css](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/16)
- [Consider importing a nav component](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/51)

Naast deze issues zijn wij ookal begonnen aan:
- [Logo voor Oncollaboration designen](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/45)
- [Featured article redesign](https://github.com/Ryank2004/Oncollaboration-Sprint-14/issues/23)

Er moet nog een hele hoop toegevoegd worden aan de website. Al deze issues staan in ons [projectboard](https://github.com/users/Ryank2004/projects/5).

## Bronnen
- [SvelteKit tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)
- [Dynamic component](https://www.youtube.com/watch?v=7h6slC4HcpI)
- [Directus fields](https://docs.directus.io/app/data-model/fields.html)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
