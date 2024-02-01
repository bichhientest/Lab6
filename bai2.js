var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){    
    $scope.getamount=function(){
         var amount=0;
        for(var i=0; i< $scope.list_item.length;i++){
            if($scope.list_item[i].buy){
               amount += $scope.list_item[i].price * $scope.list_item[i].quantity;
            }
        }return amount;
    }
$scope.list_item=[
    {
        name:"Cà phê",
        price:20000
    },
    {
        name:"Nước Cam",
        price:30000
    },
    {
        name:"Trà đào",
        price:30000
    }
]
});