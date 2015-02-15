/**
 * Created by Jorge on 2/14/2015.
 */
/**
 * Created by Jorge on 2/1/2015.
 */
(function () {
    'use strict';

    var controllerId = 'aboutCtrl';
    angular.module('app').controller(controllerId, ['$scope', '$translate',aboutCtrl]);

    function aboutCtrl($scope, $translate) {

        $scope.interests = [
            'MUSIC',
            'WEB_DEV',
            'TRILOGIES',
            'Exercise',
            'STARTUPS',
            'TEA',
            'UX_UI',
            'CATS',
            'PRODUCTIVITY'
        ];

    }
})();