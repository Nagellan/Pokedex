# Pokedex
Test task for getting job in iDecisionGames.
<img src="./public/pokelogo192.png" align="right">
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

## How to run
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
