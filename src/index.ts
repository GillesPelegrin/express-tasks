import express from 'express'
import taskRoute from './routes/task-route'

const app = express()
const port = 5000

app.use(taskRoute);

app.listen(port, () => console.log(`Running on port ${port}`))
