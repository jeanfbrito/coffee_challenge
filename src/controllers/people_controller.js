app.controller('PeopleController', function($localStorage,$scope) {
  var peopleList = this;
  $scope.weekday = [];
  this.$storage = $localStorage;
  peopleList.people = peopleList.$storage.peopleList || [
    {name:'Joao'},
    {name:'Vitor'},
    {name:'Jean'},
    {name:'Carolina'}];
  peopleList.addPerson = function() {
    if(peopleList.personName.length > 2){
      contains = false;
      for(i in peopleList.people){
        if (peopleList.people[i].name === peopleList.personName) contains = true;
      }
      if(!contains) peopleList.people.push({name:peopleList.personName});
    }
    peopleList.personName = '';
    peopleList.sortWeek();
  };
  peopleList.deletePerson = function(id) {
    peopleList.people.splice(id, 1);
  };
  peopleList.sortWeek = function(){
    $scope.weekday  = [];
    var shuffledPeople = angular.copy(peopleList.people);
    shuffledPeople = shuffleArray(shuffledPeople);
    var i,s = shuffledPeople.length;
    for (i = 0; i < 10; i++) {
      if(s == 0 ) s = shuffledPeople.length;
      s--;
      $scope.weekday.push(shuffledPeople[s])
    }
    console.log($scope.weekday );
  };
  var shuffleArray = function shuffle(arr) {
    var i,j,temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
  };
});