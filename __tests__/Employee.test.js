const Employee = require('../lib/Employee');

test('properties of employee object', () => {
  const employee = new Employee('George', '0893', 'george@station.com');
  expect(employee.name).toEqual('George');
  expect(employee.id).toEqual('0893');
  expect(employee.email).toEqual('george@station.com');
})
test('methods of employee object', () => {
  const employee = new Employee('Stacy', '1125', 'stacy@badass.com');
  expect(employee.getName()).toEqual('Stacy');
  expect(employee.getId()).toEqual('1125');
  expect(employee.getEmail()).toEqual('stacy@badass.com');
})