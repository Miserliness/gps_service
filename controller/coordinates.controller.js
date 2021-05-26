const db = require('../db')

class coordinatesController {
    async createCoordinate(req, res){
        const {lat, ing} = req.body
        const newCoordinate = await db.query('INSERT INTO Coordinates (lat, ing) values ($1, $2) RETURNING *', [lat, ing])
        res.json(newCoordinate.rows)
    }
    async getCoordinatesByBox(req, res){
        const id = req.query.id
        const Coordinates = await db.query('SELECT * FROM Coordinates WHERE box_id = $1', [id])
        res.json(Coordinates.rows)
    }
}

module.exports = new coordinatesController()