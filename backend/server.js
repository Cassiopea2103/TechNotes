require('dotenv').config()
const express= require('express')
const app= express()

const path= require('path')

const cookieParser= require('cookie-parser')
const cors= require('cors')
const { corsOptions }= require('./config/corsOptions')
const { logger }= require('./middlewares/logger')
const { errorHandler }= require('./middlewares/errorHandler')

const PORT= process.env.PORT || 3500

// Middlewares: 
// static middleware 
app.use('/', express.static(path.join(__dirname, 'public')))

//c cookies middleware: 
app.use(cookieParser())  

//json middleware:
app.use(express.json())

// cors middleware: 
app.use(cors(corsOptions))

// logger middleware: 
app.use(logger)


// views: 
app.use('/', require('./routes/rootRoutes'))

app.all('*', require('./routes/rootRoutes'))

// error Handler middleware: 
app.use(errorHandler)

app.listen(
    PORT,
    ()=> console.log(`Started the server on PORT ${PORT}`)
)