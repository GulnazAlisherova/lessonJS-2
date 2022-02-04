// var vasya = {
//   name:"Petr",
//   lastName:"Petrovskyi",
//   age: 25,
//   hobbies:{
//     art: "Drawing, singing",
//     display: function(){
//       document.write(`I love ${this.hobbies.art}.`);
//    },
//   },
//   greet: function(){ //methods
//     alert(`Hello, my name is ${this.name}! I am ${this.age} years old.`)
//   }
//  }
 
//  vasya.greet();

//  document.write(vasya.lastName); //на странице

//1. Call `greet` method multiple times.
//2. Include age in the greeting.
//3. Try chaging name and age.
//4. Create method `bye`.


// document.body.textContent = "Hello world";
// document.body.style.background = "red";


let helloWorldDiv = document.getElementById("hello-world");

helloWorldDiv.textContent = "Nice to meet you!";
helloWorldDiv.style.background = "green";
helloWorldDiv.style.textDecoration = "underline";
helloWorldDiv.style.fontSize = "28px";
