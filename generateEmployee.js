import {faker} from '@faker-js/faker';
import fs from 'fs'

function generateUsers(numberNeeded) {

  let users = []

  for (let id=1; id <= numberNeeded; id++) {

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


function create_Json(numberofEmployees){
  let dataObj = generateUsers(numberofEmployees);
  fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));
}

module.exports = {create_Json};


