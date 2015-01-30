/**
 * Created by Jorge on 1/30/2015.
 */
(function () {
    'use strict';

    var app = angular.module('app');

    //Configure the routes and route resolvers
    app.config(['$stateProvider', '$urlRouterProvider', routeConfigurator]);

    function routeConfigurator($stateProvider, $urlRouterProvider, routes) {

        var baseURL = "partials/";

        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: baseURL + "commons/404/404"
            })
            //.state('app', {
            //    url: '/app',
            //    abstract: true,
            //    templateUrl: baseURL + "commons/structure/structure"
            //})
            //.state('app.test', {
                .state('test', {
                //url: '^/test',
                url: '/test',
                templateUrl: baseURL + "test/test"
            });
    }

})();