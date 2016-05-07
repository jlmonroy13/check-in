angular
  .module('NoteWrangler')
  .config(router);

  router.$inject = ['$routeProvider'];

  function router($routeProvider) {
    $routeProvider
      .when('/notes', {
        templateUrl: '/assets/templates/pages/notes/index.html'
      })
      .when('/users', {
        templateUrl: '/assets/templates/pages/users/index.html'
      })
      .when('/', {
        redirectTo: '/users'
      })
      .otherwise( { redirectTo: '/'});
  }  
