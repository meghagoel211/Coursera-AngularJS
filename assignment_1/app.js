(function (){
    'use strict';

    angular.module('LunchApp',[])
    .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
        $scope.state="";
        $scope.checkTooMuch = function () {
            var item = $scope.item;
            var items = item.split(',');
            if (items.length <4)
                {
                    console.log (items.length);
                    $scope.state = "Enjoy!";
                }
                
        
            else
                $scope.state= "Too Much!";
            };

    }
    
  
    


})();