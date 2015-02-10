(function(){
    "use strict";

    var app = angular.module('app', [
        ////Angular modules
        //'ngRoute',
        //'ngResource',
        'ngAnimate',
        //
        ////Custom Directives
        //'bpAudioPlayer',
        //'bpAudioPlayerCrop',
        //'bpInfiniteScroll',
        //'bpNgEnter',
        //'bpMasonry',
        //'bpRangeSlider',
        //
        ////3rd Party modules
        'pascalprecht.translate',
        'ui.router'
        //'wu.masonry',
        //'LocalStorageModule',
        //'ui.slider',
        //'angularFileUpload',
        //'plunker'
    ]);

    app.run(['$rootScope', '$location',function($rootScope, $location){
    }]);
})();