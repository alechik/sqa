/* Mostrar producto
import { getProducts, getProductById } from "./infraestructure/api/product.js";


(async()=>{
    console.log(await getProducts())
    console.log(await getProductById("5ptq9q9UTgi54AaS3NST"))
})()*/


/* Crear producto
import { createProduct, getProducts } from "./infraestructure/api/product.js";

// Datos del nuevo producto a agregar
const newProductData = {
    description: "Pulmon",
    pictures: ["urlImagen1.jpg", "urlImagen2.jpg"], // Asume que quieres guardar URLs de imágenes
    product_category_id: "Cuerpo", // Asume un ID de categoría existente o de ejemplo
    product_name: "Omar",
    stock: 50, // Cantidad en stock
    unitary_price: 5000.00 // Precio unitario
};

(async () => {
    try {
        // Crear un nuevo producto
        const newProductId = await createProduct(newProductData);
        console.log(`Nuevo producto agregado con ID: ${newProductId}`);

        // Mostrar todos los productos para verificar
        console.log('Todos los productos después de agregar uno nuevo:');
        const products = await getProducts();
        console.log(products);
    } catch (error) {
        console.error("Error al crear un nuevo producto:", error);
    }
})();   */


/*Actualizar produdto*/



/*Usuario
import { createUser } from "./infraestructure/api/user.js";

// Datos iniciales del usuario para la prueba
const userData = {
    email: "nuevoUsuario@example.com",
    password: "Contraseña123",
    address: "123 Calle Principal",
    birthday_date: "2000-01-01",
    ci: "123456789",
    gender: "No especificado",
    lastnames: "Doe",
    names: "John",
    user_type_id: "tipoDeUsuario123"
};

(async () => {
    try {
        // Crear un nuevo usuario
        console.log("Creando un nuevo usuario...");
        const userId = await createUser(userData);
        console.log(`Nuevo usuario creado con ID: ${userId}`);
/*
        // Obtener y mostrar el usuario creado por ID
        console.log(`Obteniendo el usuario creado con ID: ${userId}...`);
        const user = await getUserById(userId);
        console.log("Detalles del usuario creado:", user);

        // Actualizar el usuario
        const updatedUserData = { ...userData, names: "Jane", lastnames: "Doe Updated", email: "usuarioActualizado@example.com" };
        console.log(`Actualizando el usuario con ID: ${userId}...`);
        await updateUser(userId, updatedUserData);
        console.log("Usuario actualizado.");

        // Obtener y mostrar el usuario actualizado
        console.log(`Obteniendo el usuario actualizado con ID: ${userId}...`);
        const updatedUser = await getUserById(userId);
        console.log("Detalles del usuario actualizado:", updatedUser);

        // Eliminar el usuario
        console.log(`Eliminando el usuario con ID: ${userId}...`);
        await deleteUser(userId);
        console.log("Usuario eliminado.");
*//*
    } catch (error) {
        console.error("Se produjo un error durante las pruebas de usuario:", error);
    }
})();
*/


/*
import {
    createProductCategory,
} from './infraestructure/api/product_category.js'; // Asegúrate de ajustar la ruta de importación

async function testProductCategories() {
    console.log('Creando una nueva categoría de producto...');
    const newCategory = await createProductCategory({ description: 'Gadgets y dispositivos inteligentes', name: 'Gadgets' });
    console.log('Nueva categoría creada:', newCategory);

    console.log('Obteniendo todas las categorías de productos...');
    const categories = await getProductCategories();
    console.log('Todas las categorías:', categories);

    console.log(`Obteniendo la categoría creada por ID: ${newCategory.id}`);
    const categoryById = await getProductCategoryById(newCategory.id);
    console.log('Categoría obtenida por ID:', categoryById);

    console.log(`Actualizando la categoría con ID: ${newCategory.id}...`);
    await updateProductCategory(newCategory.id, { name: 'Gadgets Actualizados' });
    console.log('Categoría actualizada.');

    console.log('Verificando la actualización...');
    const updatedCategory = await getProductCategoryById(newCategory.id);
    console.log('Detalles de la categoría actualizada:', updatedCategory);

    console.log(`Eliminando la categoría con ID: ${newCategory.id}...`);
    await deleteProductCategory(newCategory.id);
    console.log('Categoría eliminada.');

    console.log('Verificando la eliminación...');
    const categoriesAfterDeletion = await getProductCategories();
    console.log('Categorías después de la eliminación:', categoriesAfterDeletion);
}

testProductCategories().catch(console.error);*/

// test.js
// Importaciones necesarias
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { createSalesRecord } from './infraestructure/api/sales_record.js'; // Asegúrate de que la ruta es correcta

// Configuración de Firebase (reemplaza con tu propia configuración)
const firebaseConfig = {
    apiKey: "AIzaSyDF8jKuen4pA9YJvZWBTLlIPOYpzgJ9i6E",
    authDomain: "tienda-fa7e8.firebaseapp.com",
    databaseURL: "https://tienda-fa7e8-default-rtdb.firebaseio.com",
    projectId: "tienda-fa7e8",
    storageBucket: "tienda-fa7e8.appspot.com",
    messagingSenderId: "117697052879",
    appId: "1:117697052879:web:e70dbf632fc084fce9f7ba",
    measurementId: "G-722C6BWG3J"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Datos de prueba para crear un SalesRecord
const salesRecordData = {
    userId: '',
    deliveryIds: ['entrega_id_1', 'entrega_id_2'], // Asume que deliveryIds es un array
    // ... cualquier otro dato necesario para SalesRecord
};

// Función de prueba para crear un SalesRecord
async function testCreateSalesRecord() {
    try {
        const salesRecord = await createSalesRecord(salesRecordData);
        console.log('SalesRecord creado:', salesRecord);
    } catch (error) {
        console.error('Error al crear SalesRecord:', error);
    }
}

// Ejecutar las pruebas
testCreateSalesRecord();
