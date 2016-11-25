(function () {
	"use strict";

	angular.module('data')
	.component('newContact', {
		templateUrl: 'src/templates/new-contact.component.html',
		controller: NewContactComponentController,
	})

	NewContactComponentController.$inject = ['ContactsService', '$rootScope'];
	function NewContactComponentController (ContactsService, $rootScope) {
		var $ctrl = this;

		$ctrl.addContact = function () {
			$rootScope.$broadcast('darken', {on: false});
			console.log($rootScope);

			ContactsService.addContact($ctrl.name, $ctrl.phone_number, $ctrl.address);
		};
	}
})();