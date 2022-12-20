import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import _dirname from "./utils.js";
import productsRouter from "./routes/productRoutes.js";
import cartsRouter from "./routes/cartRoutes.js";
import homeHandlebar from "./routes/viewRoutes.js";
import productosEnEmpresa from "./managers/productManager.js";
const productManager = productosEnEmpresa;
let data = await productManager.getProducts();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(_dirname + `/public`));

const httpServer = app.listen(8080, () => {
  console.log(`servidor escuchando en el puerto 8080`);
});
const socketServer = new Server(httpServer);

app.engine(`handlebars`, handlebars.engine());
app.set(`views`, "src/views");
app.set(`view engine`, `handlebars`);

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", homeHandlebar);

socketServer.on(`connection`, async (socket) => {
  console.log(`Nuevo cliente conectado`);
  socket.emit(`datos`, await data);
});