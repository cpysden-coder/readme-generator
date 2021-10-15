const fs = require('fs');
const inquirer = require('inquirer');

//Inquirer prompt method goes here
inquirer.prompt([
        {
            type: 'input',
            name: 'projectname',
            message: 'Please enter the project repo name',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of the project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide a overview of how to install the project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide a brief description of how to use the appliction',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What License do you want to use?',
            choices: ["MIT", "Creative Commons license family 4.0", "The Artistic License 2.0"]
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide a brief description of tests included for project',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your github user name',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email (in form name@domain.com)',
        },
    ])
    .then((answers) => {
        // const readmePageContent = generateReadMe(answers);
        //write readmeFile
        fs.writeFileSync('README.md', generateReadMe(answers))
        })
    .then(() => console.log("Successfully created README file"))
    .catch((err) => console.log(err))



generateReadMe = (answers) => {
    if (answers.license == "MIT") {
        answers.badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (answers.license == "Creative Commons license family 4.0") {
        answers.badge = `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`
    }
    if (answers.license == "The Artistic License 2.0") {
        answers.badge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    }
    //Put markdown text here inside template literals
    return`
# ${answers.projectname}! #

## Description ##

Brief description of application:

${answers.description}

Note: this application is covered by the ${answers.badge} license

## Table of Contents ##

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

- - -

## Installation ##
Below are brief instructions on how to install:

${answers.installation}

## Usage ##
How to use this application: 

${answers.usage}

## License ##
This application is covered by the following license: 

${answers.badge}

${answers.license}

## Contributing ##
This project was developed by Chris Pysden as part of the UW Bootcamp Certificate Course for Full Stack Developers. If you would like to contribute to improving this project, then you'd be very welcome. Please follow the following guidelines (which are loosely based on Atom project guidelines):

* send an email to me using the links below to request to be added to the project and improvements briefly describe the improvements you'd like to make
* always create a new branch that encapsulates your changes
* notifiy me before commiting any updates/changes
* track all bugs as issues in the project
* have fun

## Tests ##
Tests included are referenced below:

Tests:  ${answers.tests}

I am working on implementing some basic tests to check validity of the input and to ensure consistency. Currently there are no tests that ship with the code.

## Questions ##

My Github profile is here: <https://github.com/${answers.github}>

Please contact me with questions at <${answers.email}>`

    // .then((answers) => {
    //     // const readmePageContent = generateReadMe(answers);
    //     //write readmeFile
    //     fs.writeFileSync('README.md', `${generateReadMe(answers)}`)
    //     })
    // .then(() => console.log("Successfully created README file"))
    // .catch((err) => console.log(err))
}

//render license badge function

// const renderLicenseBadge = function() {
//     if 
// }

// initialization function

// const init = () => {
//     promptUser()
//     .then((answers) => {
        // const readmePageContent = generateReadMe(answers);
        //write readmeFile
//         fs.writeFileSync('README.md', {generateReadMe(answers))
//         })
//     .then(() => console.log("Successfully created README file"))
//     .catch((err) => console.log(err))
// };

// init();





