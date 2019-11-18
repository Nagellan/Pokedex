# Pokedex
Test task for getting job in iDecisionGames.
<img src="./public/pokelogo192.png" align="right">
Create a simple application with the list of pokemons (pokedex) using the open [pokemon API](http://pokeapi.co).

[Reports](#Reports)

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
- [x] Webpack if applicable
- [x] CSS animations
- [ ] Unit testing

## Functionality
- [x] List pokemons in a table view (or cards) with their name, avatar, type (should visually look as a colored tag) and the main pokemon stats (whichever additional pokemon info you want to show)
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

## Reports

### Version 0.1

Provides getting the information about 10 first Pokemons in a database of Pokemon API.
This information contains Pokemon's common statistics and abilities with their descriptions.
It was designed and animated properly, site looks nice, but without the mobile versions yet (it's kept for further releases).

#### Difficulties
* This is my first project on React, so it took several hours to learn its basics (I had experience in Vue.js, that's why this was the least painful peoblem)
* Also it took some more hours to learn Mobx, which I was faced to for the first time. This is the most problematic part. Initially I misunderstood some concepts and all the code I wrote haven't worked in production build. All information about Mobx at the internet is mixed, different approached are overlapping on each other.
* It was hard to find the time to complete at least some part of the project qualitatively because of bunch of deadlines I have now.

#### Outcomes
* I switched on React from making project in pure javascript. I was interested in using React, but there always many thing to do, and this goal fade into background. 
* Now I'm familiar with the concept of reactivity in Mobx, and at the last day I learnt how to use it correctly (finally).
* I have my first project on React using Mobx, and it looks cute 😊 I really love it.
* The project is really interesting for me, that's why I just rushed React and mobx for 3-5 days in a row. But it was cool.
* I learnt in a good level React and Mobx for just several days. I think it's a good result, and in my opinion that's one of the most important employees' skiils - to be flexible, learn quickly and with great interest - many companies are looking for.

#### Further development
0. Think more about design imrpovements
1. Add page switching
2. Add search bar
3. Add tags and number of pages shown switching
