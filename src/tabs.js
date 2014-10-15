'use strict';

/*

HTML usage:

<tabs>
    <ul>
        <li ng-repeat="pane in tabsCtrl.panes"
            ng-click="tabsCtrl.select(pane)">
            Switch to {{pane.title}}
        </li>
    </ul>

    <pane title="one">
        One content
    </pane>
    <pane title="two">
        Two content
    </pane>
</tabs>

 */
angular.module('angular-tabs', []);
