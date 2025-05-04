import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4949e990c9414206bb2a91a62fe8bbb0'
    }
})