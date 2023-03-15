import { saveGeneratedProducts } from "../services/productsMock.services.js";

export const generateMockProducts = (req, res) => {
  try {
    const products = saveGeneratedProducts();

    res.send({ status: "success", payload: products });
  } catch (error) {
    console.log(error);
  }
};
