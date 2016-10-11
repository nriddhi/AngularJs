
var app = angular.module('myapp',[]);


app.controller('mycontro', function($scope){


$scope.data = [

{name:'Nayeem', age:'24', division:'Dhaka'},

{name:'karim', age:'26', division:'Rajshahi'},

{name:'Riddhi', age:'24', division:'Dhaka'}


];


$scope.addData = function()

{

  $scope.data.push($scope.newData);

  $scope.newData= '';

}




});