// PRODUCT MANAGER

class ProductManager {

    constructor() {
        this.products = []
    }

    //Arreglo para devolver Productos
    getProducts = () => { return this.products }
    getProductId = () => {
        const amount = this.products.length;
        const productId = (amount > 0) ? this.products[amount - 1].id + 1 : 1;
        return productId;

    }

    //Buscar Producto - Mostrar error
    getProductById = (productId) => {
        const productFound = this.products.find(element => element.id == productId)
        if (productFound) {
            console.log("El producto es:", productFound.title);
        } else {
            console.log("Not Found!");
        }
    }

    //Propiedades de los Productos
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            id: this.getProductId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        //Evitar la repetición    
        const duplicatedCode = (element) => element.code == product.code;
        if (!this.products.some(duplicatedCode)) {
            this.products.push(product)
        } else {
            console.log("El código está duplicado!")
        }
    }

}

const product = new ProductManager()

console.log("PRODUCT MANAGER", product.getProducts());

product.addProduct("Cuchara", "de acero inoxidable", 120, "Image", 009, 500)
product.addProduct("Plato", "en cerámica, para microondas", 200, "Image", 0222, 1200)
product.addProduct("Mantel", "de hilo con tramado", 450, "Image", 111, 200)
product.addProduct("vaso", "riggoleau, tipo copa para agua", 100, "Image", 078, 3000)

product.getProductById(3)
console.log(product.getProducts());
