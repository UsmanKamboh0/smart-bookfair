import { config } from 'dotenv'
config()
export default {
 secret: process.env.SECRET,
 mongodbURL: process.env.MONGODB_URI || 'mongodb+srv://usman:Usman12345@easyshopping.x8xdn9x.mongodb.net/Book-Fair?retryWrites=true&w=majority',
 port: process.env.PORT || 8000,
 corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}
