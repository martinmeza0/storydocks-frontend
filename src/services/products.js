import axios from 'axios'
const apiUrl = 'http://localhost:3001/api/products'

const getAllproducts = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

export default {getAllproducts}