const express = require('express');
const router = express.Router();

const productsRoutes = require('./Products/routeProduct');
const providersRoutes = require('./Providers/routeProvider');
const usersRoutes = require('./Users/routeUser');

router.use('/api/products/', productsRoutes());
router.use('/api/providers/', providersRoutes());
router.use('/api/users/', usersRoutes());

module.exports = router;
