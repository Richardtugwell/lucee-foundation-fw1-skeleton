angular
	.module('mainModule', [])
	.controller('mainCtrl' , mainCtrl);

mainCtrl.$inject = ['$scope' , '$http' , '$httpParamSerializer', 'FoundationApi'];

function mainCtrl($scope , $http , $httpParamSerializer, foundationApi  ) {

	$scope.sidebarClosed = true;
   foundationApi.subscribe('sub-nav', function(event) {
        if (event === 'close') {
            $scope.sidebarClosed = true;
        } else if (event === 'open') {
            $scope.sidebarClosed = false;
        } else {
            // event === 'toggle'
            $scope.sidebarClosed = !$scope.sidebarClosed;
        };
		console.log(event);
    })

};
