app.controller('PeopleController', function($localStorage,$scope) {
  var peopleList = this;
  $scope.weekday = [];
  this.$storage = $localStorage;

  //if is the first time running this app, it will add placeholder names
  peopleList.people = peopleList.$storage.peopleList || [
    {name:'Joao'},
    {name:'Vitor'},
    {name:'Jean'},
    {name:'Carolina'}];

  //add a person if it is not saved already  
  peopleList.addPerson = function() {
    if(peopleList.personName.length > 2){
      contains = false;
      for(i in peopleList.people){
        if (peopleList.people[i].name === peopleList.personName) contains = true;
      }
      if(!contains) peopleList.people.push({name:peopleList.personName});
    }
    peopleList.personName = '';
  };

  //delete person using the $index
  peopleList.deletePerson = function(id) {
    peopleList.people.splice(id, 1);
  };

  //use the algorithm to shuffle the names in the storage and add a name to each weekday and shift
  peopleList.sortWeek = function(){
    $scope.weekday  = [];
    //copy the variable to dont get the base storage shuffled
    var shuffledPeople = angular.copy(peopleList.people);
    shuffledPeople = shuffleArray(shuffledPeople);
    //distribute the names on the 10 shifts
    var i,s = shuffledPeople.length;
    for (i = 0; i < 10; i++) {
      if(s == 0 ) s = shuffledPeople.length;
      s--;
      $scope.weekday.push(shuffledPeople[s])
    }
  };

  //shuffle an array using Fisher-Yates algorithm
  //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
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