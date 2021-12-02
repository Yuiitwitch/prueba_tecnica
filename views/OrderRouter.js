const express = require('express');
const router = express.Router();

//Importo modelo de datos
const OrderController = require('../controllers/OrderController');

// Endpoints de order.
router.get('/', OrderController.getAll);
router.get('/:id', OrderController.getById);
router.post('/', OrderController.create);
router.put('/:id', OrderController.update);
router.delete('/', OrderController.delete);

module.exports = router;