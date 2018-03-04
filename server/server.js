require('dotenv').config()
const express = require('express')
, bodyParser = require('body-parser') // 76F
, massive = require('massive');

const ctrl = require('./controller');
const app = express();
app.use(bodyParser.json());

// Endpoints
// 76C
app.post('/api/createMenuItem', ctrl.create)
// app.get('/api/menuItems', ctrl.readAll)
// app.get('/api/menuItem/:id', ctrl.readOne)
// app.put('/api/menuUpdate/:id', ctrl.update)
// app.delete('/api/menu/:id', ctrl.delete)

// 70C
const SERVER_PORT = process.env.SERVER_PORT
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})