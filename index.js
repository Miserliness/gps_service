const express = require('express')
const userRouter = require('./routes/user.routes')
const boxRouter = require('./routes/box.routes')
const path = require('path')
const coordinatesRouter = require('./routes/coordinates.routes')

const app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors());
app.options('*', cors());

app.set('port', process.env.PORT || 8080)


app.use('/api', userRouter)
app.use('/api', boxRouter)
app.use('/api', coordinatesRouter)

app.use(express.static(path.resolve(__dirname, 'client', 'dist'))) // подключаем папки dist
app.use(express.static(path.resolve(__dirname, 'client', 'public'))) // и папку public

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(app.get('port'), function() { 
    console.log('we are listening on: ', 
    app.get('port'))
});
