var EmailApp = angular.module('EmailApp', [
   'ngRoute'
]);

EmailApp.config(function ($routeProvider) {
  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl',
      controllerAs: 'inbox'
    })
    .when('/inbox/email/:id', {
      templateUrl: 'views/email.html',
      controller: 'EmailCtrl',
      controllerAs: 'email'
    })
    .otherwise({
      redirectTo: '/inbox'
    })
});