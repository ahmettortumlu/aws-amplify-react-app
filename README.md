# DEVOPS LIFE CYCLE

## Why We need Cloud?

* Early developments was doing make your changes, and send it to serve on-demand servers, maybe yours local servers, 

* Today there are many company which have its own servers, and this companies servers are running 7/24 and as you expect must be serve their apps without down time.

* But maintenance is not simple for servers, you should take care them with high check time. When you need any more resource buying it and attaching these resources to existing servers which runs you application process is risky and time consuming.

* Solution is simple Cloud Services. Cloud Services helps you create infrastructure for your development sycles.

* Takes care your servers health with very high live ratio. And you will not need to buy them, you will rent it. 

* You will fasten with cloud services and you will need less peaople to maintain this services.

* Now you have a cloud, but what you need before deployment?

## What is Deployment and Deployment Models

* You will need to make decisions for deployments. Where to deploy, when to deploy, how to deploy etc.

* First question is where? I mean which operating system serve your applications. Windows, Linux or Mac. Most applications serving at Linux but ofcours you will have enough reason to deploy your app to Windows or Mac. For example for your iOS application you will need a Mac Computer to Serve it.

* The other question is When to deploy? Devops answers to this question. While you are learning software you are working on your local computers and when you up your applications with different commands suc as `python manage.py runserver` or `npm start` you are actually deploying your app to your local machines. 

* But when we want to create a product or while we are working someones product we need to work on cloud providers' servers. We can deploy our products with the same way. 
1. Connect to server,
2. Clone your source codes,
3. Provide appropriate environment variables to this server,
4. Run your commands to up your project.

* This way sounds simple but you and your team will develop your applications almost every hour. Each time when we did changes we will need to go to server and run the commands again and this sycle should process every time with minimum downtime and maximum speed. You will need to see your newly created feeatures very fast to fix issues or develop new features. 

* Continuous Integration and Continous Delivery comes at this point (CI/CD). We will create a structure and this structure will understand our commits, and check the differences and conflicts, test the new feature, if all passes builds our app and then deploys. We  will write this steps at the beginning and this process will continue wthout any touch. 

# React App

ENV File  
REACT_APP_API_KEY=  
REACT_APP_API_ID=

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
