(function () {
	"use strict";

	angular.module('PhoneBook')
		.config(RoutesConfig);

		RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
		function RoutesConfig($stateProvider, $urlRouterProvider) {

			//view if nothing else is found...
			$urlRouterProvider.otherwise('/');

			$stateProvider
				//home view
				.state('home', {
					url: '/',
					templateUrl: 'src/templates/home.html'
				})

				//contacts view
				.state('contacts', {
					url:'/contacts',
					templateUrl: 'src/templates/contacts.html',
					controller: 'ContactsController as $ctrl',
					resolve: {
						contacts: ['ContactsService', function (ContactsService) {
							return ContactsService.getContacts()
								.then(function(result) {
									return result;
								});
						}]
					}

				})

				//add contact subview
				.state('contacts.new-contact', {
					url: '/new-contact',
					templateUrl: 'src/templates/new-contact.html',
					controller: 'newContactController as $ctrl',
				})

				//Edit Contact subview
				.state('contacts.edit-contact', {
					url: '/edit-contact',
					templateUrl: 'src/templates/edit-contact.html',
					controller: 'EditContactController as $ctrl',
				})

				// use the HTML5 History API
				$locationProvider.html5Mode(true);
		}
})();
