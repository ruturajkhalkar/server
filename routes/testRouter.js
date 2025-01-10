// const express = require('express')
// const testController = require('../controller/testController')

// const router = express.Router()


//  router.get('/testroutes',testController)


// module.exports =  router



const express = require('express');
const testController = require('../controller/testController');

const router = express.Router();

router.get('/testroutes', testController);

module.exports = router;