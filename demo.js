var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
$scope.handleclick=function(){
    $scope.showemail=$scope.email;
    $scope.showpass=$scope.pass;
}
});