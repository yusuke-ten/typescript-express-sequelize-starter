import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'
import router from './routes'
import * as path from 'path'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use('/static', express.static(path.resolve(__dirname, '../static')))

app.use('/', router)

export default app
