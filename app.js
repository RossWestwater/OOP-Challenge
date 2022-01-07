const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const { writeFile, copyFile } = require('./src/generateHTML');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

// const employees = [
//   {
//     role: 'Manager',
//     name: '',
//     id:'',
//     email:'',
//     officeNum:''
//   },
//   [{
//     role: 'Engineer',
//     name: '',
//     id: '',
//     email: '',
//     github: ''
//   }],
//   [{
//     role: 'Intern',
//     name: '',
//     id: '',
//     email: '',
//     github: ''
//   }]
// ];

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
    console.log(new manager(res.mgrName, res.mgrId, res.mgrEmail, res.mgrOffcNum));
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
      console.log(new engineer(res.engName, res.engId, res.engEmail, res.engGithub))
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
      console.log(new intern(res.intName, res.intId, res.intEmail, res.intSchool))
    })
};

const addEmployee = () => {
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
      return
    }
  })
}

mgrPrompt()
.then(employeePrompt)

// enter all manager info, then save to a manager object
// select between employee engineer/intern
// if engineer selected, run collect those details and save to engineer array of objects then request if a new emplyee needs to be added, then refresh, if so.
// if intern selected, run collect those details and save to intern array of objects then request if a new emplyee needs to be added, then refresh, if so.
// if no more employees to enter, then send the info through to the generateHTML
// write the HTML file
// copy the style sheet
// catch any errors

