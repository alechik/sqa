import './dashboard.css';
import Analytics from "../../../components/dashboard/Analytics.jsx";
import { useEffect, useState } from "react";
import { db } from "../../../../infraestructure/firebase--config.js";
import { doc, getDocs, collection, getDoc } from "firebase/firestore";
import SellsReport from '../../../components/dashboard/SellsReport.jsx';
import SelledProductsList from '../../../components/dashboard/SelledProductList.jsx';
import GeneralSellInfo from '../../../components/dashboard/GeneralSellInfo.jsx';

export default function Dashboard() {
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
                        if (!productSales[product.productId]) {
                            productSales[product.productId] = 0;
                        }
                        productSales[product.productId] += product.quantity;
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
                        return {
                            productName: productDocSnapshot.data().product_name,
                            quantitySold: product.quantitySold
                        };
                    } else {
                        return null; // Devolvemos null para productos no encontrados
                    }
                });

                const topProductsData = await Promise.all(productPromises);
                const validTopProductsData = topProductsData.filter(productData => productData !== null); // Filtramos para eliminar los null

                setTopProducts(validTopProductsData);

            } catch (error) {
                console.error("Error al obtener los documentos:", error);
            }
        };

        fetchTopProducts();
    }, []);

    return (
        <div className='content'>
            <span className="section-titles">Dashboard de Ventas</span>
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
