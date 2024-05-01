import axios from "axios";

const API_URL = 'http://localhost:5000/api/v1';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`, {

        })
        return response.data
    } catch (error) {
        console.error(error)
        return null;
    }
}

export const fetchProductById = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};