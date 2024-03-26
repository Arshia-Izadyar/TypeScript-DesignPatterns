import dotenv from 'dotenv'
import Application from './app'
dotenv.config()


const app = new Application()
app.run(3030)