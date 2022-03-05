const express = require('express');
const router = express.Router();
const controllerProviders = require('../../Controllers/controllerProviders');

module.exports = () => {
	router.get('/all', controllerProviders.getAllProviders);
	router.get('/:providerId', controllerProviders.searchById);
	router.get(
		'/firstname/:providerFirstName',
		controllerProviders.searchByfirstName
	);
	router.get(
		'/lastname/:providerLastName',
		controllerProviders.searchBylastName
	);
	router.get('/email/:providerEmail', controllerProviders.searchByEmail);
	router.put('/:_id', controllerProviders.updateProvider);
	router.post('/', controllerProviders.addProvider);
	router.delete('/:providerId', controllerProviders.deleteProvider);

	return router;
};
