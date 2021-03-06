// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// User question prompts
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a description of your project:',
      name: 'description',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to add?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'BOOST 1.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      message: 'What is your user GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is link to your GitHub project?',
      name: 'link',
    },
    {
      type: 'input',
      message: 'What packages need to be installed to run your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What technologies were used to create your project?',
      name: 'technology',
    },
    {
      type: 'input',
      message: 'Please provide an example of how your project can be used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Including yourself, please list all of the contributors?',
      name: 'contributor',
    },
    {
      type: 'input',
      message: 'What command is used to run a test?',
      name: 'tests',
    },
  ]); // End of return
}; // End of questions function

// TODO: Create a function to write README file
// Function that writes to the README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: 'README Created!' });
    });
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await questions();
    generateMarkdown(answers);
    writeToFile('README.md', generateMarkdown(answers));
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
