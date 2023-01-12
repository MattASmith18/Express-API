var faker = require('json-faker');
var fs = require('fs');

const generateEmployee = () => {
  return {
    name: faker.name.Name(),
    email: faker.internet.email(),
    age: faker.age.age(),
  };
};

const generateEmployees = (numUsers) => {
  return Array.from({ length: numUsers }, generateEmployee);
};

var dataObj = generateEmployees(20);
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));