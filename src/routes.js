// Configuração do ui-router
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    // Rota para o HOME
    .state('home', {
      url: "/home",
      views: {
        "container@": {
          controller: "HomeController",
          templateUrl: "views/home/home.html"
        },
        "nav@": {
          controller: "HomeController",
          templateUrl: "views/navbar.html"
        }
      }
    })
    // Rota para o HOME
    .state('people', {
      url: "/people",
      views: {
        "container@": {
          controller: "PeopleController",
          templateUrl: "views/home/people.html"
        },
        "nav@": {
          controller: "PeopleController",
          templateUrl: "views/navbar.html"
        }
      }
    })
    .state('about', {
      url: "/about",
    views: {
      "container@": {
        controller: "HomeController",
        templateUrl: "views/home/about.html"
      },
      "nav@": {
        controller: "HomeController",
        templateUrl: "views/navbar.html"
      }
    }
  });
  });