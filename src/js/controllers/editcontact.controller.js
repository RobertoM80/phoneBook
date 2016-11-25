(function () {
	"use strict";

	angular.module('data')
	.controller('EditContactController', EditContactController);

	EditContactController.$inject = ['ContactsService', '$rootScope'];
	function EditContactController (ContactsService, $rootScope) {
		var $ctrl = this;

		$ctrl.darkPage = function () {
			$rootScope.$broadcast('darken', {on: false});
		}

	}
})();