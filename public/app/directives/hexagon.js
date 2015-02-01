(function() {
    "use strict";

    angular.module('app').directive('mmHexagonImage',[function() {
        return {
            restrict: 'A',
            template: '<div ng-show="showImg"><svg class="svg-graphic" fill-opacity="0.0"; width="180" height="200" viewBox="0 0 560 645" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1">' +
            '<g> <clipPath id="hex-mask-{{uuid}}"> <polygon points="270,0 0,160 0,485 270,645 560,485 560,160" style="stroke:#52c6ba;stroke-width:0"></polygon> </clipPath> ' +
            '<image clip-path="url(#hex-mask-{{uuid}})" height="100%" width="100%" xlink:href="{{img}}" preserveAspectRatio="xMidYMin slice"></image> ' +
            '<polygon points="270,0 0,160 0,485 270,645 560,485 560,160" style="stroke:#52c6ba;stroke-width:0"></polygon> ' +
            '</g> </svg></div>',
            replace: false,
            scope: {
                urlImage: "="
            },
            controller: ["$scope", "$sce", function ($scope, $sce) {

                var guid = (function () {
                    function s4() {
                        return Math.floor((1 + Math.random()) * 0x10000)
                            .toString(16)
                            .substring(1);
                    }
                    return function () {
                        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                            s4() + '-' + s4() + s4() + s4();
                    };
                })();

                $scope.uuid = guid();
                $scope.showImg = false;
                $scope.trustSrc = function (src) {
                    return $sce.trustAsResourceUrl(src);
                };
                $scope.img = $scope.trustSrc($scope.urlImage);

                visualizateImage();

                function visualizateImage() {
                    var img = (new Image());
                    img.src = $scope.img;

                    $(img).load(function() {
                        $scope.showImg = true;
                        $scope.$apply();
                    });

                }

                $scope.$watch('urlImage', function(newVal, oldVal) {
                    $scope.img = $scope.trustSrc(newVal);
                    visualizateImage();
                });

            }],
            link: function(scope, elem, attr) {
            }
        };
    }]);
})();