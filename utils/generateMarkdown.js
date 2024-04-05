function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "Apache 2.0") {
        return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    } else if (license === "GPL 3.0") {
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    } else if (license === "BSD 3") {
        return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    } else {
        return "";
    }
}

function renderLicenseLink(license) {
    if (license === "MIT") {
        return "https://opensource.org/licenses/MIT";
    } else if (license === "Apache 2.0") {
        return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "GPL 3.0") {
        return "https://www.gnu.org/licenses/gpl-3.0";
    } else if (license === "BSD 3") {
        return "https://opensource.org/licenses/BSD-3-Clause";
    } else {
        return "";
    }
}

function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    } else {
        return `## License
        This project is licensed under the ${license} license.`;
    }
}

function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Credits
    ${data.credits}
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## Questions
    If you have any questions, please feel free to reach out to me at ${data.email}. You can also check out my GitHub profile at [${data.github}](${data.github}).
  return # ${data.title}
`
;
}

module.exports = generateMarkdown;
