/**
 * Created by Jorge on 2/1/2015.
 */
(function () {
    'use strict';

    var controllerId = 'leftMenuCtrl';
    angular.module('app').controller(controllerId, ['$scope', '$state',leftMenuCtrl]);

    function leftMenuCtrl($scope, $state) {
        $scope.about = function() {
            $state.go("app.about")
        }
        $scope.resume = function() {
            $state.go("app.resume")
        }
        $scope.experience = function() {
            $state.go("app.experience")
        }
        $scope.contact = function() {
            $state.go("app.contact")
        }
    }
})();