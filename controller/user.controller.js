const db = require('../db')

class UserController {
    async createUser(req, res){
        const {name, login, password} = req.body
        const newPerson = await db.query('INSERT INTO person (name, login, password) values ($1, $2, $3) RETURNING *', [name, login, password])
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res){
        const persons = await db.query('SELECT * FROM person')
        res.json(persons.rows[0])
    }
    async getOneUser(req, res){
        const id = req.params.id
        const person = await db.query('SELECT * FROM person WHERE id = $1', [id])
        res.json(person.rows[0])
    }
    async updateUser(req, res){
        const {id, name, login, password} = req.body
        const user = await db.query('UPDATE person set name = $1, login = $2, password = $3 WHERE id = $4 RETURNING *', [name, login, password, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res){
        const id = req.params.id
        const person = await db.query('DELETE * FROM person WHERE id = $1', [id])
        res.json(person.rows[0])
    }
}

module.exports = new UserController()