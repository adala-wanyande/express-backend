const express = require('express');
const router = express.Router();
const catsController = require('../controllers/cats.controller');

router.get('/', catsController.getAllCats);
router.post('/', catsController.createCat);
router.get('/:id', catsController.getCatById);
router.put('/:id', catsController.updateCat);
router.delete('/:id', catsController.deleteCat);

module.exports = router;