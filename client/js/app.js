var app = angular.module("opmerkingenApp", ["firebase"]);

app.controller("opmerkingenCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://opmerkingenapp.firebaseio.com/messages");

  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText,
      leerling: $scope.newMessageLeerling,
      docent: $scope.newMessageDocent
    });
  };
});