/*
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "./infraestructure/api/product.js"; // Ajusta la ruta según sea necesario

async function testCRUDOperations() {
    console.log("Iniciando pruebas CRUD para Productos...");

    // Datos de prueba para un nuevo producto
    const sampleProductData = {
        description: "Producto de Prueba",
        pictures: ["url1.jpg", "url2.jpg"],
        product_category_id: "categoria123",
        product_name: "Producto Test",
        stock: 10,
        unitary_price: 100.0
    };

    // Crear Producto
    console.log("Creando producto...");
    const productId = await createProduct(sampleProductData);
    console.log(`Producto creado con ID: ${productId}`);

    // Obtener Todos los Productos
    console.log("Obteniendo todos los productos...");
    const products = await getProducts();
    console.log(products);

    // Obtener Producto por ID
    console.log(`Obteniendo producto con ID: ${productId}`);
    const product = await getProductById(productId);
    console.log(product);

    // Actualizar Producto
    console.log(`Actualizando producto con ID: ${productId}`);
    const updatedData = { ...sampleProductData, product_name: "Producto Actualizado" };
    await updateProduct(productId, updatedData);
    console.log("Producto actualizado.");

    // Obtener Producto Actualizado
    console.log(`Obteniendo producto actualizado con ID: ${productId}`);
    const updatedProduct = await getProductById(productId);
    console.log(updatedProduct);

    // Eliminar Producto
    console.log(`Eliminando producto con ID: ${productId}`);
    await deleteProduct(productId);
    console.log("Producto eliminado.");
}

// Ejecutar las pruebas
testCRUDOperations().catch(console.error);
*/

import {
    getProductCategories,
    getProductCategoryById,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
  } from './infraestructure/api/product_category.js'; // Ajusta la ruta según sea necesario
  
  async function testProductCategoryCRUD() {
    console.log('Iniciando pruebas CRUD para ProductCategory...');
  
    // Crear una nueva categoría de producto
    console.log('Creando una nueva categoría de producto...');
    const productCategoryData = {
      description: 'Electrónica',
      name: 'Electronics'
    };
    const newProductCategoryId = await createProductCategory(productCategoryData);
    console.log(`Nueva categoría creada con ID: ${newProductCategoryId}`);
  
    // Obtener todas las categorías de producto
    console.log('Obteniendo todas las categorías de producto...');
    const categories = await getProductCategories();
    console.log(categories);
  
    // Obtener la categoría de producto por ID
    console.log(`Obteniendo la categoría de producto por ID: ${newProductCategoryId}`);
    const categoryById = await getProductCategoryById(newProductCategoryId);
    console.log(categoryById);
  
    // Actualizar la categoría de producto
    console.log(`Actualizando la categoría de producto con ID: ${newProductCategoryId}`);
    const updatedData = { name: 'Electrónica Actualizada' };
    await updateProductCategory(newProductCategoryId, updatedData);
    console.log('Categoría de producto actualizada.');
  
    // Verificar la actualización
    console.log(`Verificando la actualización de la categoría de producto con ID: ${newProductCategoryId}`);
    const updatedCategory = await getProductCategoryById(newProductCategoryId);
    console.log(updatedCategory);
  
    // Eliminar la categoría de producto
    console.log(`Eliminando la categoría de producto con ID: ${newProductCategoryId}`);
    await deleteProductCategory(newProductCategoryId);
    console.log('Categoría de producto eliminada.');
  }
  
  testProductCategoryCRUD().catch(console.error);
  