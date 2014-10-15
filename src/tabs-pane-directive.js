'use strict';

angular.module('angular-tabs')
  .directive('pane', function paneDirective () {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: {
        name: '@'
      },
      link: function (scope, elem, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template: '<div ng-show="selected" ng-transclude></div>'
    };
  });
