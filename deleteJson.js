const fs = require('fs');

module.exports = function delete_Json(){
    const filePath = 'data.json';
    fs.access(filePath, error => {
      if (!error) {
          fs.unlinkSync(filePath);
      } else {
          console.error('Error occured:', error);
      }
    });
}