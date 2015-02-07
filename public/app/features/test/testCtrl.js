(function () {
    'use strict';

    var controllerId = 'testCtrl';
    angular.module('app').controller(controllerId, ['$scope',testCtrl]);

    function testCtrl($scope) {
    }
})();