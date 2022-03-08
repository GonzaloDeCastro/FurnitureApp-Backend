const express = require('express');
const router = express.Router();
const controllerUsers = require('../../Controllers/controllerUsers');

module.exports = () => {
	router.get('/all', controllerUsers.getAllUsers);
	router.get('/:_id', controllerUsers.searchById);
	router.put('/:userId', controllerUsers.updateUser);
	router.post('/', controllerUsers.addNewUser);
	router.delete('/:userId', controllerUsers.deleteUser);
	return router;
};
