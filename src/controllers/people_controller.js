app.controller('PeopleController', function($localStorage) {
  var peopleList = this;
  this.$storage = $localStorage;
  peopleList.people = peopleList.$storage.peopleList || [
    {name:'Joao'},
    {name:'Vitor'},
    {name:'Jean'},
    {name:'Carolina'}];
  peopleList.addPerson = function() {
    peopleList.people.push({name:peopleList.personName});
    peopleList.personName = '';
  };
  peopleList.deletePerson = function(id) {
    peopleList.people.splice(id, 1);
  };
});