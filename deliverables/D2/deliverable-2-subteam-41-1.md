## Deliverable 2

### Software Summary

The current codebase for the front-end uses a React framework with Typescript to help maintain and enforce clean and strongly typed code like in other high-level programming languages such as Java or Python. To supplement the development process, React-DOM-Router, React Query, and Material UI are some of the external libraries added to this codebase in order to streamline page routing, data fetching, and component creation respectively. The decision to utilize these external libraries was made in order for us to focus on the development aspect of the project and not be too bogged down by writing up API calls and spending too much time creating custom components.

Though we could have continued with the Django proof of concept website that the partner provided, Cecil, the team lead of Front-End, is unfamiliar with Django and is much more comfortable with FE Web Development using Typescript with a React framework. In addition, the original proof of concept used a Django back-end, which went against our goal of maintaining a microservice architecture, as it was strongly coupled with the front-end. Due to these two factors, the Front-End devs have agreed to develop using React for its ease of use and the team lead's proficiency in Typescript. In terms of testing, Cecil has installed Jest in order to create basic rendering tests for various pages in the project.

Overall, the current state of the code base, as of Deliverable 2 contains the skeleton work of Justin Chan's website, while Cecil and Jiaxin worked to clean up and add custom UI components to adhere to the mockup that was created during Deliverable 1. The codebase also now uses Typescript and has the external libraries mentioned above installed. Currently, Users are able to navigate between the landing page, the login screen, the register user screen, and the Home page (once the user has logged in).

Though the current front end is not at the level of the proof of concept, this restructuring was done in order to improve scalability and to allow future front-end developers an easier time implementing new features onto the codebase. Most importantly, it allows the front-end team to take the time to carefully structure the codebase in a way that keeps the code loosely coupled and modular, thanks to Cecil's proficiency in Typescript. By the end of the month, Cecil hopes to have the Front-end near the level of the proof of concept and to have started with setting up the additional screens needed for consent forms and questionnaires.

### Contributions

#### Cecil's Contributions

- Restructured the front-end codebase.
- Installed Typescript, React Query, Jest, and MUI into the codebase.
- Added Header bar for the website.
- Added UI components for the Login Screen.
- Added the Tic-tac-toe and Prisoner's Dilemma Interface.

#### Evelyn's Contributions

- Performed Code Reviews on various pull requests.
- Performed code cleanups on files that were linted.
- Wrote instructions on how to set up and run the codebase.
- Added sidebar for participant view.
- Structured screens for participant view.
- Recorded Demo

### Setting up your repo

To verify our work, you can either run the codebase locally or view the deployed [website](https://main.dekaw19mhqaqy.amplifyapp.com/).

#### Running the codebase locally

##### Requirements

- Node.js
- NPM
- React 18

##### Preparation before start

Make sure you have installed node.js, npm, and mui packages on your machine.
You can run the command lines below to install.

##### Local Setup

1. Clone this repository to your local machine.
2. Open the terminal and navigate to the project folder: `cd project41-frontend`
3. Run `npm install` to install the necessary packages.
4. Run `npm start` to start the frontend server locally.

```
sudo apt update
sudo apt install nodejs npm
npm install
npm install @mui/material @emotion/react @emotion/styled  //(optional)
npm start
```

### Completed User Stories

As a user, I can register or log into the website.
As a user, I can access a tic-tac-toe or Prisoner's Dilemma game, playing one round against the AI agent.
