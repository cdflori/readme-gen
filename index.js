const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a detailed description here.'

        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'What are the steps needed to install your project?'
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Provide instructions on how to use application.'
        },
        {
            type: 'input',
            name: 'contributorGuidelines',
            message: 'Provide contributor guidelines for your application and list any active contributors here:'
        },

        {
            type: 'input',
            name: 'testInstructions',
            message: 'Provide any test instructions/examples here:'
        },

        {
            type: 'list',
            name: 'license',
            message: 'License: ',
            choices: [
                {
                    name:'Apache License 2.0',
                    value: 'Apache'
                },
                {
                    name:'MIT License', 
                    value: 'MIT'
                },
                {
                    name:'GNU GPLv3',
                    value: 'GPL'
                },
            ],
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address so users know where they can direct questions to about this project. '
        },

        {
            type: 'input',
            name: 'githubProfile',
            message: 'Provide your Github profile so users know where they can direct questions to about this project.'
        }
    ]);
}

// function to initialize program
async function init() {
    try{
        const data = await promptUser();
        const newMD = generateMarkdown(data);

        await writeFileAsync('README.md', newMD, 'utf-8');
        console.log('You created a New README.md file!');
    }
    catch(error) {
        console.log(error);
    }
}

// function call to initialize program
init();
