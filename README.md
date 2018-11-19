# A monorepo with dev-server capabilities to serve microservice on localhost

A simple React app with two simple API backend endpoints for proxying requests. Deployable to Now (https://zeit.co/now) using their v2 service. 

For local development a simple Express server is created that mounts the microservices as endpoints on localhost:3001/api/todos and localhost:3001/api/moretodos 

## /my-app
React app created with Create-React-App. Calling backend API endpoints in App.js.

Development proxy to backend on port 3001 configured in `package.json`: `"proxy": "http://localhost:3001"` 

## /api
Two API endpoints, `/api/todos` & `/api/moretodos`, as separate microservices. These act as proxie endpoints for the React app, calling a mock API on `https://jsonplaceholder.typicode.com/todos`
 
##/_dev
To be able to develop a React app using Webpack dev server and two or more separate backend endpoints, using the proxy configured in my-app, we must run a local server that can serve both endpoints on the same port. The proxy cannot serve several endpoints on it's own. 

"Mounting" the microservices in an Express server is done in `/_dev/dev-server.js`. this server can then be started by the scripts in `/_dev/index.js` (which may look an awful lot like the scripts created by the Express application generator)   

Start dev server from the root by calling `yarn run dev` (in the root of the project)

## Deploy
To deploy to Now, first create an account with [zeit.co/now](https://zeit.co/now). Config of the deploy is done in `/now.json` according to their documentation.

Before deploying, build the project by running `yarn run build` (in the root of the project)