import axios from "axios";

const env='https://1972-112-134-149-143.ngrok-free.app'

export const fetchProducts = async () => {
    try {
        console.log("Fetching products from:", `${env}/product`);
        const response = await axios.get(`${env}/product`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"  // Use only when using ngrok
            }
        });
        console.log("Products fetched here:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProductById = async (productId) => {
    try {
        const response = await axios.get(`${env}/product/${productId}`, {
            headers: {
                "ngrok-skip-browser-warning": "69420"//use only when using ngrok
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};