app.controller('PeopleController', function() {
    var peopleList = this;
    peopleList.people = [
      {name:'Joao', done:false},
      {name:'Vitor', done:false},
      {name:'Jean', done:false},
      {name:'Carolina', done:false}];
 
    peopleList.addPerson = function() {
      peopleList.people.push({name:peopleList.personName, done:false});
      peopleList.personName = '';
    };
  });