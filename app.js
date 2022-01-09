const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const { writeFile, copyFile } = require('./utils/generateFiles');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees =
  {
    manager:[],
    engineers:[],
    interns:[]
  }

const mgrPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'mgrName',
      message: "Please enter the team manager's name. (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'mgrId',
      message: "Enter the manager's employee Id (Required)",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the manager's Id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'mgrEmail',
      message: "Enter the manager's email (Required)",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the manager's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'mgrOffcNum',
      message: "Enter the manager's office number (Required)",
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter the manager's email!");
          return false;
        }
      }
    }
  ])
  .then( res => {
    employees.manager.push(new Manager(res.mgrName, res.mgrId, res.mgrEmail, res.mgrOffcNum));
    console.log(employees)
  })
};
    
const employeePrompt = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: 'Please select the type of employee you would like to add',
      choices: ['Engineer', 'Intern'],
    }
    ])
    .then( results => {
      if (results.employeeType === 'Engineer') {
        engineerPrompt()
      }
      else{
        internPrompt()
      }
    }
    )
};

const engineerPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engName',
      message: "Please enter the engineer's name. (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engId',
      message: "Enter the engineer's employee Id (Required)",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the engineer's Id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engEmail',
      message: "Enter the engineer's email (Required)",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the engineer's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engGithub',
      message: "Enter the engineer's GitHub name (Required)",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter the engineer's GitHub name!");
          return false;
        }
      }
    }
    ])
    .then( res => {
      employees.engineers.push(new Engineer(res.engName, res.engId, res.engEmail, res.engGithub))
      console.log(employees)
    })
    .then( () => {
      return inquirer.prompt([
        {
          type: 'confirm',
          name: 'addEmp',
          message: 'Would you like to add another employee?',
          default: false,
        }
      ])
      .then(res => {
        if (res.addEmp === true) {
          return employeePrompt();
        }
        else {
          return generateHTML(employees);
        }
      })
    })
};

const internPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'intName',
      message: "Please enter the intern's name. (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'intId',
      message: "Enter the intern's employee Id (Required)",
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the intern's Id!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'intEmail',
      message: "Enter the intern's email (Required)",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the intern's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'intSchool',
      message: "Enter the intern's school (Required)",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter the intern's school!");
          return false;
        }
      }
    }
    ])
    .then( res => {
      employees.interns.push(new Intern(res.intName, res.intId, res.intEmail, res.intSchool))
      console.log(employees)
    })
    .then( () => {
      return inquirer.prompt([
        {
          type: 'confirm',
          name: 'addEmp',
          message: 'Would you like to add another employee?',
          default: false,
        }
      ])
      .then(res => {
        if (res.addEmp === true) {
          return employeePrompt();
        }
        else {
          return generateHTML(employees)
        }
      })
    })
};

mgrPrompt()
.then(employeePrompt)
// .then(pageHTML => {
//   return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//   console.log(writeFileResponse);
//   return copyFile();
// })
// .catch(err => {
//   console.log(err);
// });



// enter all manager info, then save to a manager object
// select between employee engineer/intern
// if engineer selected, run collect those details and save to engineer array of objects then request if a new emplyee needs to be added, then refresh, if so.
// if intern selected, run collect those details and save to intern array of objects then request if a new emplyee needs to be added, then refresh, if so.
// if no more employees to enter, then send the info through to the generateHTML
// write the HTML file
// copy the style sheet
// catch any errors

