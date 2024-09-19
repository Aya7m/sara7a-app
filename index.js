import express from 'express'
import { connectDB } from './database/connection.js'
import homeRouter from './src/modules/home/home.routes.js'
import loginRouter from './src/modules/login/login.routes.js'
import registerRouter from './src/modules/register/register.routes.js'
import messagesRouter from './src/modules/messages/messages.routes.js'
import userRoutr from './src/modules/user/user.routes.js'
import cors from 'cors'

import session from 'express-session'

const app = express()
const port =process.env.PORT|| 3000


app.use(cors())
// var MongoDBStore = require('connect-mongodb-session')(session);

import mongoSession from 'connect-mongodb-session'

let MongoDBStore=mongoSession(session)

var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/sara7a222',
    collection: 'mySessions'
  });



app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
   
  }))

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(homeRouter)
app.use(loginRouter)
app.use(registerRouter)
app.use(messagesRouter)
app.use(userRoutr)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// sara7aApp
// m4r1J7gJne0ydl97