function Person(name, age) {

  this.name = name;
  this.age = Number(age);
  //create Person properties
  this.describe = function () {
    var description = "Name : " + this.name + "\t " +"Age: " + this.age + "\n";
    return description;
  }

};