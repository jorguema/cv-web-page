angular.module('perfect_scrollbar', []).directive('perfectScrollbar',
  ['$parse', '$window','$timeout', function($parse, $window, $timeout) {
  var psOptions = [
    'wheelSpeed', 'wheelPropagation', 'minScrollbarLength', 'useBothWheelAxes',
    'useKeyboard', 'suppressScrollX', 'suppressScrollY', 'scrollXMarginOffset',
    'scrollYMarginOffset', 'includePadding', 'onScroll', 'scrollDown'
  ];

  return {
    restrict: 'EA',
    transclude: true,
    template: '<div><div ng-transclude></div></div>',
    replace: true,
    link: function($scope, $elem, $attr) {
      var jqWindow = angular.element($window);
      var options = {};

      for (var i=0, l=psOptions.length; i<l; i++) {
        var opt = psOptions[i];
        if ($attr[opt] !== undefined) {
          options[opt] = $parse($attr[opt])();
        }
      }

      $scope.$evalAsync(function() {
        $elem.perfectScrollbar(options);
        var onScrollHandler = $parse($attr.onScroll)
        $elem.scroll(function(){
          var scrollTop = $elem.scrollTop()
          var scrollHeight = $elem.prop('scrollHeight') - $elem.height()
          $scope.$apply(function() {
            onScrollHandler($scope, {
              scrollTop: scrollTop,
              scrollHeight: scrollHeight
            })
          })
        });
      });

      function update(event) {
        $scope.$evalAsync(function() {
          if ($attr.scrollDown == 'true' && event != 'mouseenter') {
            setTimeout(function () {
              $($elem).scrollTop($($elem).prop("scrollHeight"));
            }, 100);
          }
          $elem.perfectScrollbar('update');
        });
      }

      update();

      // This is necessary when you don't watch anything with the scrollbar
      //$elem.bind('mouseenter', update('mouseenter'));
      $elem.bind('mouseenter',function(event){
        update('mouseenter');
      });

      $elem.bind('onmousemove',function(event){
        update();
      });


      $timeout(function(){
        document.getElementById("main-scroll").onmousemove = function() {
          update();
        }

        var option1 = document.getElementById("option1");
        if(option1!==undefined)
          document.getElementById("option1").onclick = function() {
            $($elem).scrollTop(0);
            $timeout(function() {
              update();
            },1000);
          }
        var option2 = document.getElementById("option2");
        if(option2!==undefined)
          document.getElementById("option2").onclick = function() {
            $($elem).scrollTop(0);
            $timeout(function() {
              update();
            },1000);
          }

        var option3 = document.getElementById("option3");
        if(option3!==undefined)
          document.getElementById("option3").onclick = function() {
            $($elem).scrollTop(0);
            $timeout(function() {
              update();
            },1000);
          }

        var option4 = document.getElementById("option4");
        if(option4!==undefined)
          document.getElementById("option4").onclick = function() {
            $($elem).scrollTop(0);
            $timeout(function() {
              update();
            },1000);
          }

        var option5 = document.getElementById("option5");
          if(option5!==undefined)
          document.getElementById("option5").onclick = function() {
            $($elem).scrollTop(0);
            $timeout(function() {
              update();
            },1000);
          }
      },100);

      //document.getElementById("main-scroll").onmousemove = function() {
      //  update();
      //}
      //document.getElementById("main-scroll").onmousemove = function() {
      //  update();
      //}
      //document.getElementById("main-scroll").onmousemove = function() {
      //  update();
      //}
      //document.getElementById("main-scroll").onmousemove = function() {
      //  update();
      //}

      // Possible future improvement - check the type here and use the appropriate watch for non-arrays
      if ($attr.refreshOnChange) {
        $scope.$watchCollection($attr.refreshOnChange, function() {
          update();
        });
      }

      // this is from a pull request - I am not totally sure what the original issue is but seems harmless
      if ($attr.refreshOnResize) {
        jqWindow.on('resize', update);
      }

      $elem.bind('$destroy', function() {
        jqWindow.off('resize', update);
        $elem.perfectScrollbar('destroy');
      });

    }
  };
}]);
