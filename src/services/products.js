import axios from 'axios'
const apiUrl = 'http://localhost:3001/api/products'

const getAllproducts = () => {
    const request = axios.get(apiUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(apiUrl, newObject)
    return request.then(response => response.data)
   
}

const update = (id, newObject) => {
    const request = axios.put(`${apiUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {getAllproducts, create, update }