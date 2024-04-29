import axios from "axios";

const API_URL = 'https://api-1uph8.strapidemo.com/api';
const token= "29a4ecac141a911617ca53d13148b0bf67972dbae7288697689e9bcb84beedcfbdec6500cc75d209e964f954a7d6fe154f786dd511de868b5eeb5ef0418f6bc90ce1ee7cdaeb12a8e4ea866bd1e044b592fe3ea41a6a1612c16d009a677c1a8c62e03790e1fb761af7755cdf33e73989d49e14d62d20f43bc8e9482ed7cbb475"

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`,{
            headers:{
                Authorization:`bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        console.error(error)
        return null;
    }
}