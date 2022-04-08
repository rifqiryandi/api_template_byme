// * express 
const express = require('express')
const app = express()
const port = 3000

//* Controller dan body-parser
const control = require('./controller/c_user');
const bodyParser = require('body-parser');
app.use([
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
])

app.get('/', (req, res) => { control.getUser(res) })
    // ? get with parameter
app.get('/getUserById/:id', (req, res) => {
    var id = req.params.id //! parameter
    control.getUserById(res, id)
})
app.post('/inputRegisUser', (req, res) => { control.inputRegisUser(req, res) })
app.delete('/deleteUser/:id', (req, res) => {
    var id = req.params.id
    control.deleteUser(res, id)
})



// ! Listen port 3000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})