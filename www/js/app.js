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

  .controller('CardsCtrl', function($scope, $http, $ionicSwipeCardDelegate) {
  $scope.cards = [];
  $scope.q=[];
 
  $scope.fb=function(){
    $scope.request = $http({
            method: "get",
            url: "http://localhost:3000/api/admin/saloonlist"
          }).success(function (data2) {
            $scope.data2 = JSON.stringify(data2.success)
            console.log($scope.data2)
            localStorage.setItem('data',$scope.data2)
        });
  }

 
  $scope.addCards = function(count) {
   var a=JSON.parse(localStorage.getItem('data'))
   var b=a.length;
   console.log(b)
      for (var i = 0; i < (a.length); i++) {
        $scope.cards.push(a[i]);
      };
      console.log($scope.q)
      $scope.showCards = true;
   
  };
 
  $scope.addCards(1);
 
  /*$scope.cardSwiped = function(index) {
    $scope.addCards(1);
  };*/
 
  /*$scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };*/
 
})

  .controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.doAnything = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  };
})