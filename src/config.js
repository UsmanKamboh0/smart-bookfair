import { config } from 'dotenv'
config()
export default {
 secret: process.env.SECRET,
 mongodbURL: process.env.MONGODB_URI,
 port: process.env.PORT,
 corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}
