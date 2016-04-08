(function() {
  'use strict';

  angular.module('dashboard', [

    //common
    'common',

    //app modules
    'dashboard.todos',
    'dashboard.profile'
    ])

  angular.module('dashboard.todos', [])
  angular.module('dashboard.profile', [])

})();
