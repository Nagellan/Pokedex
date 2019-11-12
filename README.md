# Pokedex
Test task for getting job in iDecisionGames.
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBLkcoHpgA_5C-PP7g9Cfc8oyKWT4A44auFdWuuEpActI3DbYS" align="left">
Create a simple application with the list of pokemons (pokedex) using the open [pokemon API](http://pokeapi.co).

## Requirements
* The design of the app is not important, but the overall user experience and usability of the application should be good. Existing UI libraries like material ui or ant.design can be used
* The app must be developed with [React.js](https://reactjs.org/) and [MobX](https://github.com/mobxjs/mobx) (or a MobX alternative with the same observable/reactivity concept, but not Redux) in ES6.
* Source code should be open sourced on GitHub
* Application should be responsive (look good both on mobile and desktop)
* Code should be linted. Preferably with the [eslint standard config](https://github.com/feross/eslint-config-standard)
* The application should be deployed online. Heroku, github pages are a few of free alternatives for deployment

## Evaluation Criterias
* Deliver a minimal viable product in a short period of time
* Follow good coding conventions and style guides
* Know what is important to implement, and what can be left out to be implemented in future
* Ability to properly integrate libraries into the app and use them
* … more stuff depending on skill level (DRY, architecture skills, etc.)

## Bonus tasks
- [ ] Use React Hooks (https://reactjs.org/docs/hooks-intro.html), and the hooks-specific version of MobX (https://github.com/mobxjs/mobx-react-lite)
- [ ] SASS, Stylus or any other css preprocessor
- [ ] Webpack if applicable
- [ ] CSS animations
- [ ] Unit testing

## Functionality
- [ ] List pokemons in a table view (or cards) with their name, avatar, type (should visually look as a colored tag) and the main pokemon stats (whichever additional pokemon info you want to show)
- [ ] The list must have a pagination with an ability to select how many items to show per page (10 / 20 / 50)
- [ ] Filter the pokemons by name with a search box
- [ ] Filter the pokemons by type using tags (multiple selected tags have to show pokemons with any of the types selected)
