(function() {
  'use strict';

  angular.module('public', [

    //common
    'common',

    //app modules
    'public.login',
    'public.topmenu',
    'public.resetpassword',
    'public.register'
    ])

  angular.module('public.login', [])
  angular.module('public.topmenu', [])
  angular.module('public.register', [])
  angular.module('public.resetpassword', [])

})();
