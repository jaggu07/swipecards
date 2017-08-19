// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','ionic.contrib.ui.cards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.controller('cntrl', function($scope, $http, $ionicSwipeCardDelegate) {
$scope.cards = [
 "a","b","c"
];
$scope.swipe=function(){
  return swipe-card;
}
$scope.q=[];
$scope.a=function(a){
  console.log(a)
  if(a==0){
    $scope.cards=[ "a","b","c"];
    
  }
  else{
$scope.cards.splice(a);
  console.log($scope.cards)

  }
  $scope.class="animate-enter";
}
$scope.b=function(a){
  if(a==0){
    $scope.cards=[ "a","b","c"];
   
  }
  else{
  $scope.cards.splice(a);
  console.log($scope.cards)

  }
}
$scope.cardDestroyed = function(index) {
  //$scope.cards.push($scope.cards);
};
});