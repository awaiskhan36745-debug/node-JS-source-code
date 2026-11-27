let firstName = "awais";
let lastName = "";

let setName = new Promise((resolve, reject) => {
    setTimeout(() => {
   lastName = "khan";
    resolve(lastName);
}, 4000)
})

setName.then((fullName) => {
    console.log(`${firstName} ${fullName}`);
});