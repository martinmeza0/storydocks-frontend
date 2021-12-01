import axios from 'axios'
const apiUrl = 'https://storydots-api.herokuapp.com/api/products'

const getAllproducts = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

export default {getAllproducts}