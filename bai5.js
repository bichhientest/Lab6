var app=angular.module("myapp",[]);
app.directive("polynumber",function(){
return{
    restrict:"A",
    require:"ngmodel",
    link: function(scope,element,attr,ctrl){
        ctrl.$parsers.push(function(value){
var number=parseInt(value);
if(number%2==0 && number%9==0){
    ctrl.$setValidity('charE',true)
}
else{
    ctrl.$setValidity('charE',false)
}
return value;
        });
    }
}
});