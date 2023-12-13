> _Fork_ deze leertaak en ga aan de slag. 
Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. 
De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Fix the Flow - Interactieve Website
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Ontwerp en maak een interactieve website voor een opdrachtgever.

## User Story
<!-- Schrijf de user story waar je aan hebt gewerkt  -->
> Als OBA gebruiker wil ik dat als ik op de verwijder knop van een boek op de leeslijst klik, ik gewaarschuwd wordt over deze actie en de optie krijg om deze door te voeren of te annuleren zodat ik niet per ongeluk een boek van mijn leeslijst verwijder.


## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Voor deze opdracht moesten we een interactieve website voor een opdrachtgever ontwerpen en maken.
Ik heb een User Story geschreven waarin een gebruiker iets moet doen, zoals het toevoegen van informatie aan een agenda of stap voor stap door een vragenlijst klikken, een chat-formulier of bijvoorbeeld een filter systeem. In mijn geval het verwijderen van een boek van de leeslijst. Hiervoor heb ik goede feedforward en feedback ontworpen.

Als de gebruiker een boek van de leeslijst wil verwijderen, kan de gebruiker op het rode prullenbakje klikken. Zodra de gebruiker dit doet verschijnt er een venster met een waarschuwing of de gebruiker deze actie wilt doorvoeren of annuleren. Dit voorkomt dat de gebruiker perongelijk een boek van de leeslijst verwijderd. Als de gebruiker de actie doorvoert door op "Ja, verwijderen" te klikken komt er een opvolgend venster met een melding dat het gelukt is. Vervolgens kan de gebruiker hier weer uit door op het kruisje te klikken. 

Mocht de gebruiker de actie willen annuleren, kan de gebruiker op "Nee, annuleren" klikken om weer terug te gaan naar de homepagina.
<!-- Voeg een mooie poster visual toe 📸 -->
### Interactie visual
![image](https://github.com/Annevd/fix-the-flow-interactive-website/assets/144004647/5a60cd07-ba9e-4062-954d-ef733c1b665f)
![image](https://github.com/Annevd/fix-the-flow-interactive-website/assets/144004647/70e952cd-5c77-4796-b6c3-4d70c71dc6d3)
![image](https://github.com/Annevd/fix-the-flow-interactive-website/assets/144004647/83812af8-c365-4f04-ad64-b80ec5866b3b)

<!-- Voeg een link toe naar Github Pages 🌐-->
[Mijn website](https://annevd.github.io/fix-the-flow-interactive-website/leeslijst.html)

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
Voor de Javascript van deze interactie heb ik gebruikt gemaakt van het 3 stappenplan: 1. ```querySelector```, 2 ```addEventListener``` en 3 ```classList```. Met deze 3 stappen heb ik ervoor gezorgd dat de juiste elementen worden geselecteerd, dat er naar de juiste events wordt geluisterd en dat er een class bijvoorbeeld wordt getoggled. Daarnaast heb ik met een ```forEach``` loop ervoor gezorgd dat élk prullenbakje klikbaar is.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

