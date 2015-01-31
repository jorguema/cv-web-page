(function() {
    'use strict';

    var app = angular.module('app');

    app.config(['$translateProvider', function($translateProvider) {
        $translateProvider.translations('es', {
            COLON: ':',

            //TEST
            hello : 'Hola (ES)'
        })
        .translations('en', {
                COLON: ':',

                //TEST
                hello : 'Hi (EN)'
        });
        $translateProvider.preferredLanguage('en');
    }]);

})();