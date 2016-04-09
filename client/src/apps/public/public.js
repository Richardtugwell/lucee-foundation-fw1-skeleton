(function() {
  'use strict';

  angular.module('public', [

    //common
    'common',

    //app modules
    'public.login',
    'public.topmenu',
    'public.register'
    ])

  angular.module('public.login', [])
  angular.module('public.topmenu', [])
  angular.module('public.register', [])

})();
