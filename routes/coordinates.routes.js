const Router = require('express')
const router = new Router()
const coordinatesController = require('../controller/coordinates.controller')

router.post('/coordinates', coordinatesController.createCoordinate)
router.get('/coordinates', coordinatesController.getCoordinatesByBox)

module.exports = router