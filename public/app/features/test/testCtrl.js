(function () {
    'use strict';

    var controllerId = 'testCtrl';
    angular.module('app').controller(controllerId, ['$scope', loginCtrl]);

    function loginCtrl($scope) {
        $scope.hello = "hello CTRL :D";
    }
})();