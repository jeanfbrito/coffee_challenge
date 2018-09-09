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
    .state('people', {
      url: "/people",
      views: {
        "container@": {
          controller: "PeopleController",
          templateUrl: "views/home/people.html"
        },
        "nav@": {
          controller: "HomeController",
          templateUrl: "views/navbar.html"
        }
      }
    })
    .state('generated_list', {
      url: "/generated_list",
      views: {
        "container@": {
          controller: "PeopleController",
          templateUrl: "views/home/generated_list.html"
        },
        "nav@": {
          controller: "HomeController",
          templateUrl: "views/navbar.html"
        }
      }
  });
  });