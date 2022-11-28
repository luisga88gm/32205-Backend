const use = require("./ProductManager.js");

//TODO --> await use.products PARA PODER ACCEDER AL MODULO DE LOGICA Y ASÍ PODER ACCEDER A SUS MÉTODOS

//! Importante escribir dentro de la función llamar métodos

let llamarMetodos = async () => {
  //* Agregar productos --> use.products.addProduct(titulo,descripción,precio,imagen,stock)

  // await use.products.addProduct(
  //   "Cuchara",
  //   `De acero inoxidable`,
  //   120,
  //   "Image",
  //   009,
  //   500
  // );
  // await use.products.addProduct(
  //   "Plato",
  //   `En cerámica, para microondas`,
  //   200,
  //   "Image",
  //   0222,
  //   1200
  // );
  // //* Ver todos los productos -->  use.products.getProduct()
  // await use.products.getProduct();
  // //* Buscar producto por id --> use.products.getProductById(id)
  // await use.products.getProductById(2);

  //* Actualizar producto --> use.products.updateProduct(id del producto,{propiedades a cambiar: "nuevo valor de la propiedad"}), En caso de agregar más de una utilizar coma y dentro del mismo corchete
  // await use.products.uptadeProduct(2, {
  //   title: "Cuchara con mango",
  //   description: "de acero inoxidable, con mango de madera",
  // });

  //* Eliminar un producto --> use.products.deleteProduct(id del producto)
  // await use.products.deleteProduct(2)
};

llamarMetodos();