// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'MIT') {
    licenseBadge =
      '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)';
  } else if (license === 'Apache 2.0') {
    licenseBadge =
      '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'Boost 1.0') {
    licenseBadge =
      '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
  } else if (license === 'BSD 3') {
    ('[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]');
  } else {
    licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'Boost 1.0') {
    licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license === 'BSD 3') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
    licenseSection = '';
  } else {
    licenseSection = `License: ${license}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
###  ${renderLicenseLink(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Contact](#contact)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Tests
  ${data.tests}

  ## Contributors
  ${data.contributor}

  ## Contact
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
