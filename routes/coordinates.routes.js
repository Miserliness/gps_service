const Router = require('express')
const router = new Router()
const coordinatesController = require('../controller/coordinates.controller')

router.post('/box', coordinatesController.createCoordinate)
router.get('/box', coordinatesController.getCoordinatesByBox)

module.exports = router