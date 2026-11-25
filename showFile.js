const fs = require('fs');
const path = require('path');
const fileFolder1 = path.join(__dirname, 'fileFolder1');
for (let i = 1; i <= 10; i++) {
    fs.writeFileSync(path.join(fileFolder1, `file${i}.txt`), `This is file ${i}`);
};
console.log("awais");
