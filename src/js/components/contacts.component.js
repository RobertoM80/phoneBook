(function () {
	"use strict";

	angular.module('data')
	.filter('searchByFilter', SearchByFilter)
	.component('contacts', {
		templateUrl: 'src/templates/contacts.component.html',
		controller: ContactsComponentController,
		bindings: {
			contacts: '<'
		}
	})

	ContactsComponentController.$inject = ['ContactsService', '$rootScope'];
	function ContactsComponentController (ContactsService, $rootScope) {
		var $ctrl = this;

		$ctrl.darken = ContactsService.darken;

		$rootScope.$on('darken', function (event, data) {
			if (data.on === false) {
				$ctrl.darken = '';
			} 

			if (data.on === true) {
				$ctrl.darken = 'darken';
			}
		});

		$ctrl.contacts = ContactsService.contacts;

		$ctrl.deleteContact = function (index) {
			ContactsService.deleteContact(index);
		};

		$ctrl.passContact = function (index) {
			$ctrl.darken = 'darken';

			ContactsService.contactToEditIndex = index;
		};
	}

	function SearchByFilter() {
		return function (objArray, inputName, inputPhone, inputAddress) {
			objArray = objArray;
			if (inputName != undefined) {
				function isPresent(value) {
				  return value.name.toLowerCase().indexOf(inputName.toLowerCase()) != -1;
				}
				objArray = objArray.filter(isPresent);
			}
			if (inputPhone != undefined) {
				function isPresent(value) {
				  return value.phone_number.toLowerCase().indexOf(inputPhone) != -1;
				}
				objArray = objArray.filter(isPresent);		
			} 
			if (inputAddress != undefined) {
				function isPresent(value) {
				  return value.address.toLowerCase().indexOf(inputAddress.toLowerCase()) != -1;
				}
				objArray = objArray.filter(isPresent);		
			} 
			
			return objArray;
		}
	}
})();