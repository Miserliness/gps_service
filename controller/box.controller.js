const db = require('../db')

class BoxController {
    async createBox(req, res){
        const {userId} = req.body
        const newBox = await db.query('INSERT INTO box (user_id) values ($1) RETURNING *', [userId])
        res.json(newBox.rows[0])
    }
    async getBoxByUser(req, res){
        const id = req.query.id
        const boxs = await db.query('SELECT * FROM box WHERE user_id = $1', [id])
        res.json(boxs.rows)
    }
}

module.exports = new BoxController()