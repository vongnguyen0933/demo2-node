require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()

const configViewEngine = require('./config/viewengine')
const webRoutes = require('./routes/web')
app.use(morgan('combined'))
// config static file


// config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})