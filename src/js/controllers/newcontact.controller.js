(function () {
	"use strict";

	angular.module('data')
	.controller('newContactController', newContactController);

	newContactController.$inject = ['ContactsService', '$rootScope'];
	function newContactController (ContactsService, $rootScope) {
		var $ctrl = this;

		$ctrl.darkPage = function () {
			$rootScope.$broadcast('darken', {on: false});
		}
	}

})();