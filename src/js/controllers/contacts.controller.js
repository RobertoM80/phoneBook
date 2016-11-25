(function () {
	"use strict";

	angular.module('data')
	.controller('ContactsController', ContactsController);

	ContactsController.$inject = ['contacts', 'ContactsService'];
	function ContactsController (contacts, ContactsService) {
		var $ctrl = this;
		
	}
})();