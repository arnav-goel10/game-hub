import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '08f2bfd96c5048259849c772a211a48f'
    }
})
