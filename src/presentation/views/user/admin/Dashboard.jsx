import './dashboard.css'
import Analytics from "../../../components/dashboard/Analytics.jsx";
import {useEffect, useState} from "react";
import {db} from "../../../../infraestructure/firebase--config.js";
import {doc, getDocs, collection, getDoc} from "firebase/firestore";
import SellsReport from '../../../components/dashboard/SellsReport.jsx';
import SelledProductsList from '../../../components/dashboard/SelledProductList.jsx';
import GeneralSellInfo from '../../../components/dashboard/GeneralSellInfo.jsx';

export default function Dashboard(){
    const [topProducts, setTopProducts] = useState([]);
    useEffect(() => {
        const fetchTopProducts = async () => {
            try {
                const ordersCollectionRef = collection(db, 'orders');
                const productsCollectionRef = collection(db, 'products');

                const ordersSnapshot = await getDocs(ordersCollectionRef);
                const productSales = {};

                ordersSnapshot.forEach(orderDoc => {
                    const orderData = orderDoc.data();
                    orderData.products.forEach(product => {
                        const productId = product.productId;
                        const quantity = product.quantity;

                        if (!productSales[productId]) {
                            productSales[productId] = 0;
                        }

                        productSales[productId] += quantity;
                    });
                });

                const productList = Object.keys(productSales).map(productId => ({
                    productId: productId,
                    quantitySold: productSales[productId]
                }));

                productList.sort((a, b) => b.quantitySold - a.quantitySold);
                const top5Products = productList.slice(0, 5);

                const productPromises = top5Products.map(async (product) => {
                    const productDocRef = doc(productsCollectionRef, product.productId);
                    const productDocSnapshot = await getDoc(productDocRef);
                    if (productDocSnapshot.exists()) {
                        const productName = productDocSnapshot.data().product_name;
                        return {
                            productName: productName,
                            quantitySold: product.quantitySold
                        };
                    } else {
                        console.error(`No se encontró el producto con ID ${product.productId}`);
                        return null;
                    }
                });

                const topProductsData = await Promise.all(productPromises);

                const validTopProductsData = topProductsData.filter(productData => productData !== null);

                setTopProducts(validTopProductsData);

                console.log("Los productos más vendidos son:");
                validTopProductsData.forEach(productData => {
                    console.log(`- ${productData.productName}: ${productData.quantitySold} unidades vendidas`);
                    console.log(productData);
                });
            } catch (error) {
                console.error("Error al obtener los documentos:", error);
            }
        };

        fetchTopProducts();
    }, []);
    
    return (
        <div className='content'>
            <span className="section-title">Dashboard de Ventas</span>
            <div className="analytics">
                <Analytics topProducts={topProducts} />
            </div>
            <div className="general-info">
                <GeneralSellInfo />
            </div>
            <div className="full-width">
                <SellsReport />
            </div>
            <div className="full-width">
                <SelledProductsList />
            </div>
        </div>
    );
}