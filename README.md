# eCommerce Backend
  ## Badges
  None
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Questions?](#questions)
  ## License
  Read more about None here: None
  ## Description
  This project creates a mock backend framework for an eCommerce site that creates, deletes, and updates data with API (post, get, put, delete) calls to the server. Sequelize is used to connect to a MySQL database and Express.js is used to configure the server - and routes - that determine where data is sent, and what the data is used for. 
  ## Installation
   mysql2, sequelize, dotenv, express --- open a terminal at the root directory and run npm install / npm i. You will also need to create a .env file containing the following: DB_NAME={name of the schema you want to use}, DB_USER={username you set up mysql with} DB_PW{MySQL password or '' if you don't have a password set}. To start the app run 'npm start' or to debug npm run dev (NOTE: Before you run start, to ensure you have some data to work with run 'npm run seeds'. This will check your database connection as well as insert data before your server runs). To use, go to localhost:3000||port/api/...[products, tags, or categories]. Each route has configured get, post, put, and delete methods. Get , Delete, and Put methods use query strings as parameters. When using the POST method, send data in a JSON formatted body. 
  ## Usage
  Creates a simple eCommerce API
  ## Contributors 
[jeremy0anderson](https://github.com/jeremy0anderson) | 
projects@jeremyanderson.dev

  ## Questions?
  ### Contact me at: 
  [jeremy0anderson](https://github.com/jeremy0anderson)  
  projects@jeremyanderson.dev 