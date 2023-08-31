const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
//routes are read top-down
//put root router to the bottom
router.use('/', siteController.index);

module.exports = router;
