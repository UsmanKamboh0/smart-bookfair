import { Router } from "express";
import * as buyerCtrl from "../controllers/buyer.controller.js";
import * as authJwt from "../middlewares/authJwt.js";
import { checkForm } from "../middlewares/verify.js";

const router = Router()

router.get('/', buyerCtrl.getAllBuyers)
router.post('/order', [authJwt.verifyBuyerToken, authJwt.isBuyer], buyerCtrl.createOrder)
router.get('/:buyerId', [authJwt.verifyBuyerToken, authJwt.isBuyer], buyerCtrl.getBuyerById)
router.put('/:buyerId', [authJwt.verifyBuyerToken, authJwt.isBuyer], buyerCtrl.updateBuyerById)
router.delete('/deletebuyers', buyerCtrl.deleteAllBuyers)
router.delete('/deleteorders', buyerCtrl.deleteAllOrders)

export default router;