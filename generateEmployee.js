//import {faker} from '@faker-js/faker';
import mongoose from 'mongoose';
const { faker } = require('@faker-js/faker');

function generateUsers() {

  let users = []

  for (let id = 1; id <= 50; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let personAge = faker.datatype.number({ 'min': 18, 'max': 67 });

    users.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "age": personAge
    });
  }

  return { "Employees": users }
}

module.exports = { generateUsers };


