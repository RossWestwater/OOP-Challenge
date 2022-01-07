const Engineer = require('../lib/Engineer');

test('properties of engineer object', () => {
  const engineer = new Engineer('George', '0893', 'george@station.com', 'RossWestwater');
  expect(engineer.name).toEqual('George');
  expect(engineer.id).toEqual('0893');
  expect(engineer.email).toEqual('george@station.com');
  expect(engineer.githubName).toEqual('RossWestwater');
})
test('methods of engineer object', () => {
  const engineer = new Engineer('Stacy', '1125', 'stacy@badass.com', 'RossWestwater');
  expect(engineer.getName()).toEqual('Stacy');
  expect(engineer.getId()).toEqual('1125');
  expect(engineer.getEmail()).toEqual('stacy@badass.com');
  expect(engineer.getGithubName()).toEqual('RossWestwater');
  expect(engineer.getRole()).toEqual('Engineer');
})
