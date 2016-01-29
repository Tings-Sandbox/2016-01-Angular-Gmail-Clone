EmailApp.directive('inbox', function(){
  return {
  //Now we can use this directive anywhere in our application's scope by creating an <inbox></inbox> element (using restrict: 'E' to specify an element directive).
  //When the application runs, Angular will replace the <inbox> element with the template at the templateUrl. 
  //Finally we have a link function that will run straight after the controller runs. The link function will then receive the aliased controller as the fourth argument, here we named it ctrl. 
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: "js/directives/inbox.tmpl.html",
    controllerAs: 'inbox',
    controller: function (InboxFactory) {
       this.messages = [];
       this.goToMessage = function (id) {
          InboxFactory.goToMessage(id);
       };
       this.deleteMessage = function (id, index) {
          InboxFactory.deleteMessage(id, index);
       };
       InboxFactory.getMessages()
          .then( angular.bind( this, function then() {
             this.messages = InboxFactory.messages;
          })  );
    },
    link: function (scope, element, attrs, ctrl) {
       /*
       by convention we do not $ prefix arguments to the link function
       this is to be explicit that they have a fixed order
       */
    }
  }
})