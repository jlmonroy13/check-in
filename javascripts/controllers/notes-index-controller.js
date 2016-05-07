angular
  .module('NoteWrangler')
  .controller('NotesIndexController', requestNotes);
  requestNotes.$inject = ['$http'];
  function requestNotes($http) {
    var controller = this;
    $http({method: 'GET', url: '/notes'}).success(function(data) {
      controller.notes = data;
    });
  }

