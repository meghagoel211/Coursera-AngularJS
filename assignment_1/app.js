(function (){
    'use strict';

    angular.module('LunchApp',[])
    .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
        $scope.state="";
        $scope.item="";
        
        $scope.checkTooMuch = function () {

            var item = $scope.item;
            
            var items = item.split(',');
            if($scope.item==""){
                $scope.state="Please enter data first";
            }
            else{
                if (items.length <4)
                {
                    $scope.state = "Enjoy!";
                }
                    
            
            else
                $scope.state= "Too Much!";

            }
            
           
            

          
            };

    }
    
  
    


})();