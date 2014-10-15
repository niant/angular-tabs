'use strict';

angular.module('angular-tabs')
  .directive('tabs', function tabsDirective () {
    return {
      restrict: 'E',
      scope: true,
      controller: function() {
        var panes = this.panes = [];

        this.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        };

        this.addPane = function(pane) {
          panes.push(pane);

          if (panes.length === 1) {
            this.select(pane);
          }
        };
      },
      controllerAs: 'tabsCtrl'
    };
  });
