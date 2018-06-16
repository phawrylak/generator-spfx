const inquirer = require('inquirer');
const chalk = require('chalk');

const fgYellow = chalk.whiteBright.bold;

const supportedFrameworks = [{
        name: 'Handlebars',
        value: 'handlebars'
    },
    {
        name: 'VueJS',
        value: 'vuejs'
    },
    {
        name: 'Angular Elements',
        value: 'angularelement'
    },
    new inquirer.Separator(
        fgYellow('Default SPFx')
    ),
    {
        name: '- ReactJS',
        value: 'reactjs'
    },
    {
        name: '- Knockout',
        value: 'knockout'
    },
    {
        name: '- No Framekwork',
        value: 'noframework'
    }
];

let configOptions = [
    // select your framework
    {
        type: 'list',
        message: "Choose your framwork",
        name: 'framework',
        choices: supportedFrameworks
    }
]

// addon generator
const addon = require('../generators/addons/promptConfig');
configOptions = configOptions.concat(addon);

const promptConfig = {
    config: configOptions
}

module.exports = promptConfig;