const router = require('express-promise-router')();
const stockController = require('../controllers/stock');

router.post('/stocks', stockController.createStock);
router.get('/stocks', stockController.listAllStocks);
router.get('/stocks/:id', stockController.findStocksById);
router.put('/stocks/:id', stockController.updateStockById);
router.delete('/stocks/:id', stockController.deleteStockById);

module.exports = router;