(function () {
'use strict';
        
angular.module('LunchChecker', [])
.controller('LunchController', LunchController);
        
LunchController.$inject = ['$scope'];
function LunchController($scope) {
    $scope.message = "Checking...";
    $scope.items = "";
    $scope.lunchCheck = function () {
        var newItems = $scope.items.split(",");
        for (let i = 0; i < newItems.length + 1; i++) {
            i += 1;
            if (i <= 3) {
                $scope.message = "Enjoy"
            } else if (i > 3) {
                $scope.message = "Too much!"
                
            } else {
                $scope.message = "Please enter data first."
            }
                
        }
            
    }
}
        
})();