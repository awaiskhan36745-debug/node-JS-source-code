console.log("awais hadi");
const fs = require("fs");
const path = require("path");
const myCRUD = path.join(__dirname, "CRUD");

const mypath = `${myCRUD}/crud.txt`

//create a file
fs.writeFileSync( mypath, "create read update delete");

//read a file
fs.readFile(mypath, "utf-8", (err, data) => {
    if (err) {
        console.log(err); 
    } else {
        console.log(data);
    }
});

//update a file
fs.appendFile(mypath, " in node JS", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file updated successfully");
    }
});

//delete a file
fs.unlink(mypath, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file deleted successfully");
    }
});

//rename a file
fs.rename(mypath, `${myCRUD}/crud-renamed.txt`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file renamed successfully");
    }
});