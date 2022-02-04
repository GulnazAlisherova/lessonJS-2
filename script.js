var vasya = {
  name:"Vasilyi",
  lastName:"Petrovskyi",
  age: 25,
  greet: function(){
    alert(`Hello, my name is ${this.name}!`);
  }
}
vasya.greet();