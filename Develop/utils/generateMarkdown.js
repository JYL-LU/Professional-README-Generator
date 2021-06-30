// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    return `![github license](https://img.shields.io/badge/license-${license}-blueviolet.png)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n For license link, please check at (https://choosealicense.com/licenses/mit/#)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
## License

This project is licensed under the ${license} license.

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table Of Contents 
  * [Description](#description)
  * [Installation](#installation) 
  * [Usage](#usage) 
  * [License](#license) 
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [Questions](#questions)

## Visual Presentation

(https://drive.google.com/file/d/1DCuXCwPPzWO1wcOrtFcD3mUfUTQAY8QF/view)

<img width="721" alt="Terminal Input" src="https://user-images.githubusercontent.com/82979870/123585993-f035f180-d798-11eb-91f2-1cc9f12b6acd.png">
 
## Description
  ${data.description}

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License 
  ${renderLicenseBadge(data.license)} 
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

## Contribution
  ${data.contribution}

## Test
  ${data.test}

## Questions
  * For further information, please send email to ${data.email}
  * Check for details on Github at [${data.github}](https://github.com/${
    data.github
  })
`;
}

module.exports = generateMarkdown;
