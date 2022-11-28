<h1 align="center">Programación Back-end 32205</h1>
<hr>
<h4>Clonar con la terminal el repositorio dentro de una carpeta. Luego, movilizarse a la carpeta y ejecutar promises.js y comenzará a correr</h4>
<hr>
<h2>Lógica:</h2>
<h4>- ProductManager.js contiene la clase y los métodos solicitados, en caso de querer modificar o agregar un método, ingresar y reemplazar en este archivo.</h4>
<h4>- promises.js contiene toda la parte funcional, en la cual se van a poder agregar, listar, filtrar, eliminar y actualizar productos.</h4>
<hr>
<h2>Comandos de promises.js:</h2>
<h3>Importante escribir sobre la función llamada llamarMetodos, ya que esta le permite trabajar con asincronismo.</h3>
<h4>-await use.product nos va a permitir ingresar a la clase de lógica.js, por tanto a partir de ahí vamos a poder utilizar sus métodos.</h4>
<hr>
<h4>Métodos:</h4>
<h4>Agregar productos --> await use.products.addProduct(titulo,descripción,precio,imagen,stock)</h4>
<h4>Ver todos los productos -->  await use.products.getProduct()</h4>
<h4>Buscar producto por id --> await use.products.getProductById(id)</h4>
<h4>Actualizar productos --> await use.products.updateProduct(id del producto, {propiedad a cambiar:"nuevo valor"}), En caso de agregar más de una utilizar coma y dentro del mismo corchete</h4>
<h4>Eliminar productos --> await use.products.deleteProduct(id)</h4>