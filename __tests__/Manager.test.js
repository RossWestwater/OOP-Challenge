const Manager = require('../lib/Manager');

test('properties of manager object', () => {
  const manager = new Manager('George', '0893', 'george@station.com', '111111');
  expect(manager.name).toEqual('George');
  expect(manager.id).toEqual('0893');
  expect(manager.email).toEqual('george@station.com');
  expect(manager.officeNumber).toEqual('111111');
})
test('methods of manager object', () => {
  const manager = new Manager('Stacy', '1125', 'stacy@badass.com', '222222');
  expect(manager.getName()).toEqual('Stacy');
  expect(manager.getId()).toEqual('1125');
  expect(manager.getEmail()).toEqual('stacy@badass.com');
  expect(manager.getOfficeNumber()).toEqual('222222');
  expect(manager.getRole()).toEqual('Manager');
})