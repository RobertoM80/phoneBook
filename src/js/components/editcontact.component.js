(function () {
	"use strict";

	angular.module('data')
	.component('editContact', {
		templateUrl: 'src/templates/edit-contact.component.html',
		controller: EditContactComponentController
	})

	EditContactComponentController.$inject = ['ContactsService', '$rootScope'];
	function EditContactComponentController (ContactsService, $rootScope) {
		var $ctrl = this;

		$ctrl.nameToEdit = ContactsService.contacts[ContactsService.contactToEditIndex].name;
		$ctrl.phoneToEdit = ContactsService.contacts[ContactsService.contactToEditIndex].phone_number;
		$ctrl.addressToEdit = ContactsService.contacts[ContactsService.contactToEditIndex].address;

		$ctrl.editContact = function () {
			var index = ContactsService.contactToEditIndex;

			$rootScope.$broadcast('darken', {on: false});

			ContactsService.editContact(index, $ctrl.name, $ctrl.phone_number, $ctrl.address)
		}

	}
})();