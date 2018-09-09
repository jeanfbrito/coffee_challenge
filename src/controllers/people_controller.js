app.controller('PeopleController', function($localStorage) {
  var peopleList = this;
  this.$storage = $localStorage;
  peopleList.people = peopleList.$storage.peopleList || [
    {name:'Joao'},
    {name:'Vitor'},
    {name:'Jean'},
    {name:'Carolina'}];
  peopleList.addPerson = function() {
    contains = false;
    for(i in peopleList.people){
      if (peopleList.people[i].name === peopleList.personName) contains = true;
    }
    if(!contains) peopleList.people.push({name:peopleList.personName});
    peopleList.personName = '';
  };
  peopleList.deletePerson = function(id) {
    peopleList.people.splice(id, 1);
  };
});