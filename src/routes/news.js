const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
//routes are read top-down
//put root router to the bottom
router.use('/', newsController.index);

module.exports = router;
