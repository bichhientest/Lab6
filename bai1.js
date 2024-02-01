var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
$scope.list_age=[
    {
        age: "Dưới 25",
        rate: 0.07
    },
    {
        age: "Từ 25 đến 40",
        rate: 0.1
    },
    {
        age: "Trên 40",
        rate: 0.15
    }    
];
$scope.salary=0;
$scope.gender="Nam";
$scope.age=$scope.list_age[1];
$scope.getBonus=function(){
    var bonus=$scope.age.rate*$scope.salary;
    if($scope.gender=="Nu"){
        bonus+= 200000;
    }
    return bonus;
}
});