const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

inquirer.prompt([
  {
    name: "Title",
    message: "What is the title of your project",
    type: "input",
  },
  {
    name: "Description",
    message: "Provide a detailed description of your project",
    type: "input",
  },
  {
    name: "Installation",
    message: "What instructions should users follow to install your programme",
  },
  {
    name: "Usage",
    message: "What is the main use of this application",
    type: "input",
  },
  {
    name: "Contribution",
    message: "How can developers improve this application",
  },
  {
    name: "tests",
    message: "What are the test instructions for this application",
    type: "input",
  },
  {
    name: "Questions",
    message: "Enter your Github username",
    type: "input",
  },
  {
    name: "Questions",
    message: "Enter your Email address",
    type: "input",
  },
]);
