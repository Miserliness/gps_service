const express = require('express')
const userRouter = require('./routes/user.routes')
const boxRouter = require('./routes/box.routes')
const coordinatesRouter = require('./routes/coordinates.routes')
const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', boxRouter)
app.use('/api', coordinatesRouter)

app.listen(PORT, console.log('server started on port ${PORT}'))