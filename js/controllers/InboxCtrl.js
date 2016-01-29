angular.module('EmailApp')
  .controller('InboxCtrl',
    function InboxCtrl ($scope, InboxFactory) {
      //InboxFactory.getMessages() returns $http().
      InboxFactory.getMessages()
         .success(function(jsonData, statusCode) {
            console.log('The request was successful!', statusCode, jsonData);
            // Now add the Email messages to the controller's scope
            $scope.emails = jsonData;
      });
    });

