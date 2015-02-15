/**
 * Created by Jorge on 2/1/2015.
 */
(function () {
    'use strict';

    var controllerId = 'leftMenuCtrl';
    angular.module('app').controller(controllerId, ['$scope', '$state', '$translate', '$document',leftMenuCtrl]);

    function leftMenuCtrl($scope, $state, $translate, $document) {
        
        switch($state.current.name){
            case 'app.about' :  {$scope.optionSelected = 'about'; break;}
            case 'app.resume' :  {$scope.optionSelected = 'resume'; break;}
            case 'app.experience' :  {$scope.optionSelected = 'experience'; break;}
            case 'app.contact' :  {$scope.optionSelected = 'contact'; break;}
            case 'app.skills' :  {$scope.optionSelected = 'skills'; break;}
            default: break;
        }

        $scope.about = function() {
            $scope.optionSelected = 'about';
            $state.go("app.about");
        };
        $scope.resume = function() {
            $scope.optionSelected = 'resume';
            $state.go("app.resume");
        };
        $scope.experience = function() {
            $scope.optionSelected = 'experience';
            $state.go("app.experience");
        };
        $scope.contact = function() {
            $scope.optionSelected = 'contact';
            $state.go("app.contact");
        };
        $scope.skills = function() {
            $scope.optionSelected = 'skills';
            $state.go("app.skills");
        };

        $scope.currentLang = true;
        $scope.langES= function(){
            $translate.use('es');
            $scope.currentLang = true;
            //$scope.clicked;
        };
        $scope.langEN= function(){
            $translate.use('en');
            $scope.currentLang = false;
        };
        $scope.configActive = false;

        $document.bind('click', function(event){
            if($scope.configActive)
                if(event!==null && event.target!==undefined && event.target.id!==undefined)
                    if(event.target.id != "img-config-lang") {
                        $scope.configActive = false;
                        $scope.$apply();
                    }
        });

    }
})();