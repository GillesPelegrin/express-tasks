import express from 'express'
import taskRoute from './routes/task-route'

// should adapt env depending for development / tests / production
// require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` })
require('dotenv').config({ path: `./environment/.env.development` })
require('./configurations/db-configuration')

const app = express()

app.use(taskRoute);

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))

export default app;
