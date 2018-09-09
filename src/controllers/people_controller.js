app.controller('PeopleController', function($localStorage) {
    var peopleList = this;
    this.$storage = $localStorage;
    peopleList.people = peopleList.$storage.peopleList || [
      {name:'Joao', done:false},
      {name:'Vitor', done:false},
      {name:'Jean', done:false},
      {name:'Carolina', done:false}];

    peopleList.addPerson = function() {
      peopleList.people.push({name:peopleList.personName, done:false});
      peopleList.$storage.peopleList = peopleList.people;
      peopleList.personName = '';
    };
    peopleList.deletePerson = function() {
      peopleList.people.splice(this.$index, 1);
    };
  });