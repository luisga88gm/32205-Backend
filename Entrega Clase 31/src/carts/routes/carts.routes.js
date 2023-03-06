import express from "express";
import { authPolicies, authToken } from "../../utils/jwt.js";
import {
  addArrayOfProducts,
  addProductToCart,
  createCart,
  deleteOneProduct,
  emptyCart,
  getCartById,
  getCarts,
  updateProductQuantity,
  pruchaseCart,
} from "../controller/carts.controller.js";

const Router = express.Router();

Router.post("/", createCart);

Router.get("/", getCarts);

Router.get("/:cid", getCartById);

Router.post("/cid", addArrayOfProducts);

Router.delete("/:cid", emptyCart);

Router.post("/:cid/product/:pid", authToken, authPolicies("USER"), addProductToCart);

Router.put("/:cid/product/:pid", updateProductQuantity);

Router.delete("/:cid/product/:pid", deleteOneProduct);

Router.post("/:cid/purchase", purchaseCart);

export default Router;
