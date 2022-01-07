const Intern = require('../lib/Intern');

test('properties of intern object', () => {
  const intern = new Intern('George', '0893', 'george@station.com', 'UofU');
  expect(intern.name).toEqual('George');
  expect(intern.id).toEqual('0893');
  expect(intern.email).toEqual('george@station.com');
  expect(intern.school).toEqual('UofU');
})
test('methods of intern object', () => {
  const intern = new Intern('Stacy', '1125', 'stacy@badass.com', 'UofU');
  expect(intern.getName()).toEqual('Stacy');
  expect(intern.getId()).toEqual('1125');
  expect(intern.getEmail()).toEqual('stacy@badass.com');
  expect(intern.getSchool()).toEqual('UofU');
  expect(intern.getRole()).toEqual('Intern');
})