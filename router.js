const router = require('express').Router();

//Importamos Routes definidas en views
const OrderRouter = require('./views/OrderRouter');

//Rutas
router.use('/order', OrderRouter);

module.exports = router;