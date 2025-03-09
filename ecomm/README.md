// MICROFRONTEND PROJECT SETUP-
(Integration Method) - Run Time Integration using Webpack Module Federation

Projects-
Container - Container project which assemble the child projects and decide which parts to load basis condition
Carts
ProductList

Projects Setup Steps:
Created ecomm
 - Created products
   - do npm init -y
   - Install below dependencies
     - npm install webpack@5.88.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 faker@5.1.0 html-webpack-plugin@5.5.0 --save-exact 
   - Created src > index.js
   - Created webpack.config.js and add "start" inside > package.json > script > start 
   - On terminal run - npm run start
   - Configure the webpack dev server - to make our application run on the web browsers
   - Impotant:
     - Webpack dev server can generate multiple javascript files to optimize the application performance
     - So we can't directly map the dist files into index.html file
     - html-webpack-plugin : This plugin take a look that whatever files are coming out from the webpack process, it's going to find the file names and add the appropiate script tag inside the template configured
