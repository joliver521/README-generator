// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, 'utf8', function (err) {
    if (err) {
      throw err;
    }
    console.log(`You have successfully written your README file`);
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
