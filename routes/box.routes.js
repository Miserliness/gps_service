const Router = require('express')
const router = new Router()
const boxController = require('../controller/box.controller')

router.post('/box', boxController.createBox)
router.get('/box', boxController.getBoxByUser)

module.exports = router