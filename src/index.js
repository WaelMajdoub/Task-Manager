import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import 'dotenv/config'
const app = express()
const port = process.env.PORT
import databaseConnexion from './tools/databaseConnexion'
import auth from './routes/auth'

//connect to mongodb database
databaseConnexion()

//enable middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//enable routes
app.use('/api/auth', auth)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})