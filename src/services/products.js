import axios from 'axios'
const apiUrl = 'https://stark-lowlands-86374.herokuapp.com/api/products'

const getAllproducts = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

export default {getAllproducts}