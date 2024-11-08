import axios from 'axios'

const api = axios.create({
    baseURL: 'https://easy-stay-backend-pet0.onrender.com'
})

export default api
