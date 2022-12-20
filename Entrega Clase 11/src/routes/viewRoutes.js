import express from "express";
const router = express.Router();
import productosEnEmpresa from "../managers/productManager.js";
const productManager=productosEnEmpresa
export let data = await productManager.getProducts();


router.get(`/`, async (req, res) => {
  res.render(`home`, {
    data,
    style:"listaEstatica.css"
  });
});

router.get(`/realtimeproducts`, async (req, res) => {
  res.render(`realtimeProducts`, {
    style:"listaEstatica.css"
  });
});
export default router;