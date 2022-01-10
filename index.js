const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

const basicInfo = [
  {
    type: 'input',
    name: 'emplyeeName',
    message: "Please enter the employee's name. (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'emplyeeId',
    message: "Enter the employee's id (Required)",
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter an id!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'emplyeeEmail',
    message: "Enter the employee's email (Required)",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter an email!");
        return false;
      }
    }
  }
]

const [name, id, email] = basicInfo
const employees = [];

const addEmployee = () =>
{
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'addEmp',
      message: 'Would you like to add another employee?',
      default: false,
    }
  ])
  .then(res => {
    if (res.addEmp === true) {
      employeePrompt();
    }
    else {
      const htmlBody = generateHTML(employees)
      console.log(htmlBody)
      fs.writeFileSync('./dist/index.html', htmlBody);
    }
  })
}

const mgrPrompt = () => {
  inquirer.prompt([
    name, id, email,
    {
      type: 'input',
      name: 'officeNumber',
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
    employees.push(new Manager(res.emplyeeName, res.emplyeeId, res.emplyeeEmail, res.officeNumber));
    console.log(employees)
    employeePrompt()
  })
};
    
const employeePrompt = () => {
  inquirer.prompt([
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
   inquirer.prompt([
     name, id, email,
    {
      type: 'input',
      name: 'github',
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
      employees.push(new Engineer(res.emplyeeName, res.emplyeeId, res.emplyeeEmail, res.github))
      console.log(employees)
    })
    .then(addEmployee)
};

const internPrompt = () => {
  inquirer.prompt([
    name, id, email,
    {
      type: 'input',
      name: 'school',
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
      employees.push(new Intern(res.emplyeeName, res.emplyeeId, res.emplyeeEmail, res.school))
      console.log(employees)
    })
    .then(addEmployee)
};

mgrPrompt()


