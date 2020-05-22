var Persons = [];//Empty Array. This is supposed to hold Persons Objects

function addPerson() {
  //1. Get Person details from DOM
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;

  //2. Create Persons Object
  var person = new Person(name, age);
  console.log(person.name);
  //3.Add it to the list
  Persons.push(person);

}



function getByAgeCondition() {
  //1. Get Age condition using html input ageCondition
  var age = Number(document.getElementById('ageCondition').value);


  //2. if Age is zero get all persons description
  var newList = Persons;
  if (age != 0) {
    newList = newList.filter(function (person) {
      return person.age <= age;
    });
  }

  //3. if age is some value, filter persons whose age is lower than given
  var personsList = "";
  for (person of newList) { //This is ES6 for loop
    personsList += person.describe();
  }
  //4. update personsList
  var listElement = document.getElementById("personsList");
  listElement.innerHTML = personsList;
}