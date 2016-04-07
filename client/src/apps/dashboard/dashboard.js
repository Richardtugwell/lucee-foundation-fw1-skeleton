(function() {
  'use strict';

  angular.module('dashboard', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',

    //app modules
    'dashboard.todos',
    'dashboard.profile'
    ])

  angular.module('dashboard.todos', [])
  angular.module('dashboard.profile', [])

})();
