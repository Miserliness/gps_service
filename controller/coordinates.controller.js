const db = require('../db')

class coordinatesController {
    async createCoordinate(req, res){
        const {boxId, lat, lng} = req.body
        const newCoordinate = await db.query('INSERT INTO coordinates (box_id, lat, ing) values ($1, $2, $3) RETURNING *', [boxId, lat, lng])
        res.json(newCoordinate.rows)
    }
    async getCoordinatesByBox(req, res){
        const id = req.query.id
        const Coordinates = await db.query('SELECT * FROM coordinates WHERE box_id = $1', [id])
        res.json(Coordinates.rows)
    }
}

module.exports = new coordinatesController()