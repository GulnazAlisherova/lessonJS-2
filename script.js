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

//GetelementbyId

let helloWorldDiv = document.getElementById("hello-world"); //можно не только Id но и Divы классы

helloWorldDiv.textContent = "Nice to meet you!";
helloWorldDiv.style.background = "green";
helloWorldDiv.style.textDecoration = "underline";
helloWorldDiv.style.fontSize = "28px";

//getElementbyTagName


let allParagraphs = document.getElementsByTagName("p");

for (let paragraph of allParagraphs) {
  paragraph.style.backgroundColor = "lightBlue";
  paragraph.style.color = "tomato";
  paragraph.style.fontWeight = "bold";
}

// getElementsByClassName

//нello world rursivetext-red

let allHelloWorlds = document.getElementsByClassName("hello-world");

for (let helloWorld of allHelloWorlds) {
  helloWorld.style.fontFamily = "cursive";
  helloWorld.style.color = "tomato";
  helloWorld.style.fontStyle = "italic";
}


//querySelector
 
let helloWorld2 = document.querySelector("#hello-world");
helloWorld2.style.backgroundColor = "purple";

let allHelloWorlds2 = document.querySelectorAll(".hello-world");

for (let helloWorld of allHelloWorlds2) {
  helloWorld.style.fontSize = "5px";
}

let test = document.querySelector(`p:first-of-type`).textContent = "HELLO";

//дает гибкость 

