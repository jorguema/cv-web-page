/**
 * Created by Jorge on 2/1/2015.
 */
(function () {
    'use strict';

    var controllerId = 'leftMenuCtrl';
    angular.module('app').controller(controllerId, ['$scope', '$state',leftMenuCtrl]);

    function leftMenuCtrl($scope, $state) {
        $scope.optionSelected = 'about';

        $scope.about = function() {
            $scope.optionSelected = 'about';
            $state.go("app.about")
        }
        $scope.resume = function() {
            $scope.optionSelected = 'resume';
            $state.go("app.resume")
        }
        $scope.experience = function() {
            $scope.optionSelected = 'experience';
            $state.go("app.experience")
        }
        $scope.contact = function() {
            $scope.optionSelected = 'contact';
            $state.go("app.contact")
        }
    }
})();