import express, { Request, Response } from 'express';
import morgan from "morgan"
import { config } from './configs/env.config';
import { authRouter } from './routes/auth/auth.router';
import {initializeDatabase} from './database/firebase'
import { authTokenVerification } from './middlewares/token';
import { productRouter } from './routes/product/product.router';
import { collectionRouter } from './routes/collection.router';
import { configRouter } from './routes/config/config.router';
import { wishlistRouter } from './routes/wishlist/wishlist.router';
import cors from 'cors';
import { cartRouter } from './routes/cart/cart.router';
import { orderRouter } from './routes/order/order.router';
var compression = require('compression')



const app = express();
const port = config.PORT;
app.use(compression())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
// app.use(morgan(config.NODE_ENV === "development" ? "dev" : "combined"))
app.use(morgan("dev"))

app.get('/', (_req: Request, res: Response) => {
  res.json({ status: "UP" })
});

app.use("/api", authRouter )
app.use("/api", configRouter)
app.use("/product", productRouter);
app.use("/collection",collectionRouter)
app.use("/wishlist", wishlistRouter)
app.use("/cart", cartRouter)
app.use("/order", orderRouter)

app.post("/api/test", authTokenVerification, (_req, resp) => {
  resp.json({ status: "Passed"});
})

app.listen(port, () => {
  initializeDatabase();
  console.log(`Server running at http://localhost:${port}`);
});
