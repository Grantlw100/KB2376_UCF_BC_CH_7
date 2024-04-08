const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide credit information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address:'
    }
];

function writeToFile(fileName, data) {
    const dir = './generated-readmes';
    const filePath = path.join(dir, fileName);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFile(filePath, data, (err) =>
        err ? console.error(err) : console.log('Success! Your README.md file has been generated!')
    );
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const timestamp = new Date().getTime();
            const fileName = `README-${timestamp}.md`;

            writeToFile(fileName, generateMarkdown(data));
        });
}

init();
