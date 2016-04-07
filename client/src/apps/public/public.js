(function() {
  'use strict';

  angular.module('public', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    
    //app modules
    'public.login',
    'public.register'
    ])

  angular.module('public.login', [])
  angular.module('public.register', [])

})();
