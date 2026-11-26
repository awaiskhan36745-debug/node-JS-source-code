console.log("awais");


setTimeout(() => {
    console.log("alazi");
}, 2000);


console.log("hadi");

//drawback of asynchronous code 
let a = awais;
let b = hadi; 
let c = "";



setTimeout(() => { 
    c = "alazi";
    console.log( c );
}, 2000);

console.log( a+b+c);