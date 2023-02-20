import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { dirname } from 'path';


import config from './config.js'
import BuyerRoutes from './routes/buyer.routes.js';
// import OrderRoutes from './routes/order.routes';
import SellerRoutes from './routes/seller.routes.js';
// import BookRoutes from './routes/book.routes';
import SellersRoutes from './routes/sellers.routes.js';
import AuthRoutes from './routes/auth.routes.js';

import { createRoles } from './libs/initialSetup.js';

const app = express();
createRoles()
app.set('port', config.port)

//middlewares
const corsOptions = {
 origin: config.corsOrigin
}
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//routes
// app.get('/', (req, res) => {
//   res.json({ message: "book-fair-server..." })
//  }
//  )
 const __filename =("./build")
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "./dist")));




app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist/index.js"));
});



app.use('/api/seller/', SellerRoutes)
app.use('/api/buyer/', BuyerRoutes)
app.use('/api/sellers/', SellersRoutes)
app.use('/api/auth', AuthRoutes)





export default app;
