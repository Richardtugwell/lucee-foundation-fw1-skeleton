(function() {
  'use strict';

  angular.module('common', [
    'ui.router',
    'ngAnimate',
    'ngResource',

    //foundation
    'foundation',

    //app modules
    'common.header'
    ])

  angular.module('common.header', [])

})();
