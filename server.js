//global variables
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const {
  getAllMakeup, getMakeupById, getMakeupByBrand, getMakeupByType, addMakeup, deleteMakeup
} = require('./dal');
const routes = require('./routes/routes')

//setting up express static
app.use(express.static('public'))

//setting up mustache express
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

//setting up body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//routes
app.use('/', routes)

//starting up server
app.listen(3000, function () {
  console.log('Server is serving on port 3000! Get your server here!')
})
