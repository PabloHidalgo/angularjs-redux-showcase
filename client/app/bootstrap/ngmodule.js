/**
 * This file imports the third party library dependencies, then creates the angular module "demo"
 * and exports it.
 */

// External dependencies
import * as angular from 'angular';

import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import ngRedux from 'ng-redux';

export let ngmodule = angular.module('app', [uiRouter, ngRedux, angularMaterial]);
