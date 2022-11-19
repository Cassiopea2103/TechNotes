const express= require('express')
const app= express()

const path= require('path')

const { homePage }= require('./controllers/rootController')

const PORT= process.env.PORT || 3500

// static middleware 
app.use('/', express.static(path.join(__dirname, 'public')))

// views: 
app.use('/', require('./routes/rootRoutes'))

app.all('*', require('./routes/rootRoutes'))

app.listen(
    PORT,
    ()=> console.log(`Started the server on PORT ${PORT}`)
)