(function () {
	"use strict";

	angular.module('data')
	.service('ContactsService', ContactsService);

	ContactsService.$inject = ['$http', 'ApiPath'];
	function ContactsService ($http, ApiPath) {
		var service = this;

		service.darken = '';

		service.getContacts = function () {
			var response = $http({
				method: 'jsonp',
				url: (ApiPath + '?callback=JSON_CALLBACK')
			})
			.then(function (response) {
				service.contacts = response.data.contacts;
				console.log(service.contacts);
				return response.data;
			})
			.catch(function (error) {
				console.log('error: ', error);
			});

			return response;
		};

		service.deleteContact = function (index) {
			service.contacts.splice(index, 1);
		}

		service.addContact = function (name, phone, address) {
			service.darken = 'darken';
			service.newContact = {};

			service.newContact.name = name;
			service.newContact.phone_number = phone;
			service.newContact.address = address;

			if (service.newContact.name != '' && service.newContact.phone_number != '' && service.newContact.address != '') {
				service.contacts.push(service.newContact);
			}
		}

		service.editContact = function (index, name, phone, address) {
			service.darken = 'darken';
			service.contacts[index].name = name;
			service.contacts[index].phone_number = phone;
			service.contacts[index].address = address;
		};
	}
})();