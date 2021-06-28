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
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
This project is licensed under the ${license} license.`;
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
  ##
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
