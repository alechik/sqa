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
/*
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
 */ 
/*
  import {
    getSalesRecords,
    getSalesRecordById,
    createSalesRecord,
    updateSalesRecord,
    deleteSalesRecord
  } from './infraestructure/api/sales_record.js'; // Ajusta la ruta según sea necesario
  
  async function testSalesRecordOperations() {
    console.log("Iniciando pruebas de operaciones de registros de ventas...");
  
    // Datos de prueba para un nuevo registro de ventas
    const sampleSalesRecordData = {
      user_id: "test_user_id",
      delivery_id: "test_delivery_id"
    };
  
    // Test: Crear registro de ventas
    console.log("Creando registro de ventas...");
    const salesRecordId = await createSalesRecord(sampleSalesRecordData);
    console.log(`Registro de ventas creado con ID: ${salesRecordId}`);
  
    // Test: Obtener registros de ventas
    console.log("Obteniendo todos los registros de ventas...");
    const salesRecords = await getSalesRecords();
    console.log(salesRecords);
  
    // Test: Obtener un registro de ventas por ID
    console.log(`Obteniendo registro de ventas por ID: ${salesRecordId}`);
    const salesRecord = await getSalesRecordById(salesRecordId);
    console.log(salesRecord);
  
    // Test: Actualizar registro de ventas
    console.log(`Actualizando registro de ventas con ID: ${salesRecordId}`);
    const updatedData = { delivery_id: "updated_delivery_id" };
    await updateSalesRecord(salesRecordId, updatedData);
    console.log("Registro de ventas actualizado.");
  
    // Verificar la actualización
    console.log(`Verificando la actualización del registro de ventas con ID: ${salesRecordId}`);
    const updatedSalesRecord = await getSalesRecordById(salesRecordId);
    console.log(updatedSalesRecord);
  
    // Test: Eliminar registro de ventas
    console.log(`Eliminando registro de ventas con ID: ${salesRecordId}`);
    await deleteSalesRecord(salesRecordId);
    console.log("Registro de ventas eliminado.");
  }
  
  testSalesRecordOperations().catch(console.error);

  import {
    getProductRatings,
    getProductRatingById,
    createProductRating,
    updateProductRating,
    deleteProductRating
  } from './infraestructure/api/product_rating.js'; // Ajusta la ruta según sea necesario
  
  async function testProductRatingOperations() {
    console.log("Iniciando pruebas de operaciones de calificaciones de productos...");
  
    // Datos de prueba para una nueva calificación de producto
    const sampleProductRatingData = {
      product_id: "test_product_id",
      rating: 5,
      date: new Date().toISOString(),
      user_id: "test_user_id"
    };
  
    // Test: Crear calificación de producto
    console.log("Creando calificación de producto...");
    const productRatingId = await createProductRating(sampleProductRatingData);
    console.log(`Calificación de producto creada con ID: ${productRatingId}`);
  
    // Test: Obtener calificaciones de productos
    console.log("Obteniendo todas las calificaciones de productos...");
    const productRatings = await getProductRatings();
    console.log(productRatings);
  
    // Test: Obtener una calificación de producto por ID
    console.log(`Obteniendo calificación de producto por ID: ${productRatingId}`);
    const productRating = await getProductRatingById(productRatingId);
    console.log(productRating);
  
    // Test: Actualizar calificación de producto
    console.log(`Actualizando calificación de producto con ID: ${productRatingId}`);
    const updatedData = { rating: 4 }; // Cambio en la calificación
    await updateProductRating(productRatingId, updatedData);
    console.log("Calificación de producto actualizada.");
  
    // Verificar la actualización
    console.log(`Verificando la actualización de la calificación de producto con ID: ${productRatingId}`);
    const updatedProductRating = await getProductRatingById(productRatingId);
    console.log(updatedProductRating);
  
    // Test: Eliminar calificación de producto
    console.log(`Eliminando calificación de producto con ID: ${productRatingId}`);
    await deleteProductRating(productRatingId);
    console.log("Calificación de producto eliminada.");
  }
  
  testProductRatingOperations().catch(console.error);
  */
/*
  import {
    getDeliveries,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
  } from './infraestructure/api/delivery.js'; // Asegúrate de que la ruta sea correcta
  
  async function testDeliveryOperations() {
    console.log("Iniciando pruebas de operaciones de entrega...");
  
    // Datos de prueba para una nueva entrega
    const sampleDeliveryData = {
      user_id: "test_user_id",
      delivered: false,
      delivery_address: "Test Address",
      delivery_detail_id: "test_delivery_detail_id"
    };
  
    // Test: Crear entrega
    console.log("Creando entrega...");
    const newDeliveryId = await createDelivery(sampleDeliveryData);
    console.log(`Entrega creada con ID: ${newDeliveryId}`);
  
    // Test: Obtener entregas
    console.log("Obteniendo todas las entregas...");
    const deliveries = await getDeliveries();
    console.log(deliveries);
  
    // Test: Obtener una entrega por ID
    console.log(`Obteniendo entrega por ID: ${newDeliveryId}`);
    const delivery = await getDeliveryById(newDeliveryId);
    console.log(delivery);
  
    // Test: Actualizar entrega
    console.log(`Actualizando entrega con ID: ${newDeliveryId}`);
    const updatedData = { delivered: true };
    await updateDelivery(newDeliveryId, updatedData);
    console.log("Entrega actualizada.");
  
    // Verificar la actualización
    console.log(`Verificando la actualización de la entrega con ID: ${newDeliveryId}`);
    const updatedDelivery = await getDeliveryById(newDeliveryId);
    console.log(updatedDelivery);
  
    // Test: Eliminar entrega
    console.log(`Eliminando entrega con ID: ${newDeliveryId}`);
    await deleteDelivery(newDeliveryId);
    console.log("Entrega eliminada.");
  }
  
  testDeliveryOperations().catch(console.error);

import {
  getOffers,
  getOfferById,
  createOffer,
  updateOffer,
  deleteOffer
} from './infraestructure/api/offer.js'; // Ajusta la ruta según sea necesario

async function testOfferOperations() {
  console.log("Iniciando pruebas de operaciones de ofertas...");

  // Datos de prueba para una nueva oferta
  const sampleOfferData = {
    product_category_id: "sample_category_id",
    description: "Oferta de prueba",
    percentage: 10,
    amount: 5
  };

  // Test: Crear oferta
  console.log("Creando oferta...");
  const newOfferId = await createOffer(sampleOfferData);
  console.log(`Oferta creada con ID: ${newOfferId}`);

  // Test: Obtener ofertas
  console.log("Obteniendo todas las ofertas...");
  const offers = await getOffers();
  console.log(offers);

  // Test: Obtener una oferta por ID
  console.log(`Obteniendo oferta por ID: ${newOfferId}`);
  const offer = await getOfferById(newOfferId);
  console.log(offer);

  // Test: Actualizar oferta
  console.log(`Actualizando oferta con ID: ${newOfferId}`);
  const updatedData = { percentage: 20, amount: 10 }; // Datos de prueba para actualización
  await updateOffer(newOfferId, updatedData);
  console.log("Oferta actualizada.");

  // Verificar la actualización
  console.log(`Verificando la actualización de la oferta con ID: ${newOfferId}`);
  const updatedOffer = await getOfferById(newOfferId);
  console.log(updatedOffer);

  // Test: Eliminar oferta
  console.log(`Eliminando oferta con ID: ${newOfferId}`);
  await deleteOffer(newOfferId);
  console.log("Oferta eliminada.");
}

testOfferOperations().catch(console.error);

import {
  getPrices,
  getPriceById,
  createPrice,
  updatePrice,
  deletePrice
} from './infraestructure/api/price.js'; // Asegúrate de ajustar la ruta

async function testPriceOperations() {
  console.log("Iniciando pruebas de operaciones de precios...");

  // Datos de prueba para un nuevo precio
  const samplePriceData = {
    offer_id: "sample_offer_id",
    current_price: 100,
    last_price: 90,
    currency: "USD",
    update_date: new Date().toISOString() // Ejemplo de formato de fecha
  };

  // Test: Crear precio
  console.log("Creando precio...");
  const newPriceId = await createPrice(samplePriceData);
  console.log(`Precio creado con ID: ${newPriceId}`);

  // Test: Obtener precios
  console.log("Obteniendo todos los precios...");
  const prices = await getPrices();
  console.log(prices);

  // Test: Obtener un precio por ID
  console.log(`Obteniendo precio por ID: ${newPriceId}`);
  const price = await getPriceById(newPriceId);
  console.log(price);

  // Test: Actualizar precio
  console.log(`Actualizando precio con ID: ${newPriceId}`);
  const updatedData = { current_price: 95 };
  await updatePrice(newPriceId, updatedData);
  console.log("Precio actualizado.");

  // Verificar la actualización
  console.log(`Verificando la actualización del precio con ID: ${newPriceId}`);
  const updatedPrice = await getPriceById(newPriceId);
  console.log(updatedPrice);

  // Test: Eliminar precio
  console.log(`Eliminando precio con ID: ${newPriceId}`);
  await deletePrice(newPriceId);
  console.log("Precio eliminado.");
}

testPriceOperations().catch(console.error);

import {
  getDeliveryDetails,
  getDeliveryDetailById,
  createDeliveryDetail,
  updateDeliveryDetail,
  deleteDeliveryDetail
} from './infraestructure/api/delivery_detail.js'; // Asegúrate de ajustar la ruta

async function testDeliveryDetailOperations() {
  console.log("Iniciando pruebas de operaciones de detalles de entrega...");

  // Datos de prueba para un nuevo detalle de entrega
  const sampleDeliveryDetailData = {
    sell_by_product_id: "sample_product_id",
    total_sell: 100,
    date: new Date().toISOString() // Formato de fecha ISO
  };

  // Test: Crear detalle de entrega
  console.log("Creando detalle de entrega...");
  const newDeliveryDetailId = await createDeliveryDetail(sampleDeliveryDetailData);
  console.log(`Detalle de entrega creado con ID: ${newDeliveryDetailId}`);

  // Test: Obtener detalles de entrega
  console.log("Obteniendo todos los detalles de entrega...");
  const deliveryDetails = await getDeliveryDetails();
  console.log(deliveryDetails);

  // Test: Obtener un detalle de entrega por ID
  console.log(`Obteniendo detalle de entrega por ID: ${newDeliveryDetailId}`);
  const deliveryDetail = await getDeliveryDetailById(newDeliveryDetailId);
  console.log(deliveryDetail);

  // Test: Actualizar detalle de entrega
  console.log(`Actualizando detalle de entrega con ID: ${newDeliveryDetailId}`);
  const updatedData = { total_sell: 150 };
  await updateDeliveryDetail(newDeliveryDetailId, updatedData);
  console.log("Detalle de entrega actualizado.");

  // Verificar la actualización
  console.log(`Verificando la actualización del detalle de entrega con ID: ${newDeliveryDetailId}`);
  const updatedDeliveryDetail = await getDeliveryDetailById(newDeliveryDetailId);
  console.log(updatedDeliveryDetail);

  // Test: Eliminar detalle de entrega
  console.log(`Eliminando detalle de entrega con ID: ${newDeliveryDetailId}`);
  await deleteDeliveryDetail(newDeliveryDetailId);
  console.log("Detalle de entrega eliminado.");
}

testDeliveryDetailOperations().catch(console.error);

import {
  getInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice
} from './infraestructure/api/invoice.js'; // Adjust the import path as needed

async function testInvoiceOperations() {
  console.log("Starting tests for invoice operations...");

  // Test data for a new invoice
  const sampleInvoiceData = {
    delivery_id: "sample_delivery_id",
    user_id: "sample_user_id",
    description: "Sample invoice description",
    date: new Date().toISOString() // ISO date format
  };

  // Test: Create invoice
  console.log("Creating an invoice...");
  const newInvoiceId = await createInvoice(sampleInvoiceData);
  console.log(`Invoice created with ID: ${newInvoiceId}`);

  // Test: Get all invoices
  console.log("Getting all invoices...");
  const invoices = await getInvoices();
  console.log(invoices);

  // Test: Get an invoice by ID
  console.log(`Getting invoice by ID: ${newInvoiceId}`);
  const invoice = await getInvoiceById(newInvoiceId);
  console.log(invoice);

  // Test: Update invoice
  console.log(`Updating invoice with ID: ${newInvoiceId}`);
  const updatedData = { description: "Updated invoice description" };
  await updateInvoice(newInvoiceId, updatedData);
  console.log("Invoice updated.");

  // Verify the update
  console.log(`Verifying the update for the invoice with ID: ${newInvoiceId}`);
  const updatedInvoice = await getInvoiceById(newInvoiceId);
  console.log(updatedInvoice);

  // Test: Delete invoice
  console.log(`Deleting invoice with ID: ${newInvoiceId}`);
  await deleteInvoice(newInvoiceId);
  console.log("Invoice deleted.");
}

testInvoiceOperations().catch(console.error);
*/

import {
  getSellByProducts,
  getSellByProductById,
  createSellByProduct,
  updateSellByProduct,
  deleteSellByProduct
} from './infraestructure/api/sell_by_product.js'; // Adjust the import path as needed

async function testSellByProductOperations() {
  console.log("Starting tests for SellByProduct operations...");

  // Test data for a new SellByProduct
  const sampleSellByProductData = {
    product_id: "sample_product_id",
    product_amount: 10,
    total_sell: 1000
  };

  // Test: Create SellByProduct
  console.log("Creating a SellByProduct...");
  const newSellByProductId = await createSellByProduct(sampleSellByProductData);
  console.log(`SellByProduct created with ID: ${newSellByProductId}`);

  // Test: Get all SellByProducts
  console.log("Getting all SellByProducts...");
  const sellByProducts = await getSellByProducts();
  console.log(sellByProducts);

  // Test: Get a SellByProduct by ID
  console.log(`Getting SellByProduct by ID: ${newSellByProductId}`);
  const sellByProduct = await getSellByProductById(newSellByProductId);
  console.log(sellByProduct);

  // Test: Update SellByProduct
  console.log(`Updating SellByProduct with ID: ${newSellByProductId}`);
  const updatedData = { product_amount: 15, total_sell: 1500 };
  await updateSellByProduct(newSellByProductId, updatedData);
  console.log("SellByProduct updated.");

  // Verify the update
  console.log(`Verifying the update for SellByProduct with ID: ${newSellByProductId}`);
  const updatedSellByProduct = await getSellByProductById(newSellByProductId);
  console.log(updatedSellByProduct);

  // Test: Delete SellByProduct
  console.log(`Deleting SellByProduct with ID: ${newSellByProductId}`);
  await deleteSellByProduct(newSellByProductId);
  console.log("SellByProduct deleted.");

  // Verify deletion
  try {
    await getSellByProductById(newSellByProductId);
    console.log("Error: SellByProduct was not deleted successfully.");
  } catch (error) {
    console.log("SellByProduct deletion verified.");
  }
}

testSellByProductOperations().catch(console.error);