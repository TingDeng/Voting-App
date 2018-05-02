var app = angular.module('votingApp', []);
app.controller('myCtrl', function($scope) {
  $scope.percentageF = 0;
  $scope.percentageM = 0;
  var female = 0;
  var male = 0;
  var total = 0;
  $scope.count =0;
  $scope.countF = function(){
      female++;
      $scope.count++;
      total = female + male;
      $scope.percentageF = ((female/total)*100).toFixed(0);
      $scope.percentageM = ((male/total)*100).toFixed(0);
      changeColor();
    }

    $scope.countM = function() {
      male++;
      $scope.count++;
      total = female + male;
      $scope.percentageM = ((male/total)*100).toFixed(0);
      $scope.percentageF = ((female/total)*100).toFixed(0);
      changeColor();
    }

    function changeColor(){
      if($scope.percentageF>$scope.percentageM){
        $(".female").css("color", "#349e3b");
        $(".male").css("color", "#e60000");
      }
      else if($scope.percentageF<$scope.percentageM){
        $(".female").css("color", "#e60000");
        $(".male").css("color", "#349e3b");
      }
      else{
        $(".female").css("color", "#ffa31a");
        $(".male").css("color", "#ffa31a");
      }
    }

    $(".btn-success").click(function (){
      $(this).html("Voted");
      $(this).css("background-color","#595757");
      var voted = this.parentNode.firstElementChild.innerHTML.toLowerCase();
      alert("You voted for " + voted);
    });
});
