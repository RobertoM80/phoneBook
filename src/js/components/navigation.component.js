(function () {
	"use strict";

	angular.module('data')
	.component('navigation', {
		templateUrl: 'src/templates/navigation.component.html',
		controller: NavigationComponentController
	})

	NavigationComponentController.$inject = ['$rootScope'];
	function NavigationComponentController ($rootScope) {
		var $ctrl = this;

		$ctrl.darkPage = function () {
			$rootScope.$broadcast('darken', {on: true});
		}
	}
})();