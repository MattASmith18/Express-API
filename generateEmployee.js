//import {faker} from '@faker-js/faker';
const faker= require('@faker-js/faker');
//import fs from 'fs'
const fs = require('fs');


function generateUsers() {

  let users = []

  for (let id=1; id <= 50; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let personAge = faker.datatype.number({'min': 18, 'max': 67 });

    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "age ": personAge
    });
  }

  return { "Employees": users }
}


export function create_Json(){
  let dataObj = generateUsers();
  fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));
}




