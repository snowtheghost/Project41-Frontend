# Project 41 - Front-end

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Frontend Local Development Setup

### Pre-requisites
Ensure that Node.js `v18.15.0` and npm `v9.5.0`, are installed into your machine.
If you do not have them installed, you can install them using these commands:
```
sudo apt update
sudo apt install nodejs npm
```

### Setup
1. Clone this repository to your local machine
2. Open your terminal, and navigate to the repository's root folder: `project-41-frontend` by default. It will be different if you renamed the folder.
3. Run `npm install` to make sure that all the packages are properly installed.
4. You can test the website locally by running `npm start`. The frontend server will then start and be running on http://localhost:3000

### Project Dependencies
- Typescript
- React DOM
- Axios/React Query (Both serve the same purpose)
- Jest
- MUI
- AG Grid
    
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deployment
Currently, this project is deployed using AWS Amplify. This service will auto-generate a Docker image and deploy your website every time a specific branch is edited. We recommend setting up multiple branches for staging and deployment and to not deploy your public website using `main`, as unintended bugs can slip through testing.

### Steps:
1. Set up an AWS Account (requires credit card)
2. Select the AWS Amplify Service
3. In All Apps Page, select New Apps -> Host Web App
4. Choose Github for existing code
5. Once connected, select a repo and a branch for deployment.
6. Choose your build settings
7. Review and AWS Amplify will take care of the deployment!

## Frontend Architecture
On the Front-end, we primarily aim to keep our code self-documenting whenever we can. As a result, we try to maintain single-responsibility principle for each file. At the top of the directory, the `src` is split up into 4 Main Folders:
- Components: For individual GUI components that make up a website's responsiveness and usability
- Pages: The skeleton and framework from which each page is set up. Dependent on Components and Util files to function.
- Util: All the API and other technical files that do not return a User-viewable JSX component.
- Testing: Where we store the tests in the codebase. Dependent on Pages.

As you go down the directory, each of the folders detail what aspect of the website it is responsible for.

### App.tsx
The root file from which the website is run. Using React DOM, we control where a given URL should go within the website. Note that some pages are protected and cannot be accessed without being logged in. If you are not logged in and try to access that page, you will be redirected back to the Home page.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
