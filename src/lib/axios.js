import axios from 'axios'

export default axios.create({
    baseURL: 'https://nahian-api.000webhostapp.com/api/todos',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true
})