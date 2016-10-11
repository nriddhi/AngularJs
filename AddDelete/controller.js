
var app = angular.module('myapp', []);


app.controller('mycontro', function($scope){


$scope.list = ['Bag', 'Pencil', 'Pen'];


$scope.addItem = function()

{

  $scope.list.push($scope.addMe);

  $scope.addMe = "";

}


$scope.removeItem = function(x)

{


$scope.list.splice(x,1);


}




});