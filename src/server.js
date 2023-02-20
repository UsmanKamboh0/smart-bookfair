import mongoose from "mongoose";
import config from "./config.js";
import app from './app.js'

(async () => {
 try {
  const db = await mongoose.connect(config.mongodbURL,
   {
    useNewUrlParser: true,
    useUnifiedTopology: true,

   });
  console.log('Connected to MongoDB database: ', db.connection.name)
 } catch (error) {
  console.log(error)
 }
})()

const port = app.get('port')
app.listen(port)
console.log(`Server listening on port ${port}...`)