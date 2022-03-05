const express = require('express');
const router = express.Router();
const controllerUsers = require('../../Controllers/controllerUsers');

module.exports = () => {
	router.get('/all', controllerUsers.getAllUsers);
	router.get('/:_id', controllerUsers.searchById);
	router.put('/:_id', controllerUsers.updateUser);
	router.post('/', controllerUsers.addNewUser);
	router.delete('/:UserId', controllerUsers.deleteUser);
	return router;
};
