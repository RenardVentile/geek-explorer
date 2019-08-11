const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const firstOptionsRouter = require('./routes/firstOptionsRouter')
const secondOptionsRouter = require('./routes/secondOptionsRouter')
const cheatSheetsRouter = require('./routes/cheatSheetsRouter')
const categoriesRouter = require('./routes/categoriesRouter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Home 
app.get('/', function (req, res) {
  res.send('Welcome on GeekExplorer API')
})

//First Option
app.use('/api/first-option', firstOptionsRouter)

//Second Option
app.use('/api/second-option', secondOptionsRouter)

//Cheatsheet
app.use('/api/cheat-sheets', cheatSheetsRouter)

//Categories
app.use('/api/categories', categoriesRouter)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});