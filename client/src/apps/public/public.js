(function() {
  'use strict';

  angular.module('public', [
    
    //common
    'common',
    
    //app modules
    'public.login',
    'public.register'
    ])

  angular.module('public.login', [])
  angular.module('public.register', [])

})();
