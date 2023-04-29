import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'b8f853d8abd84ddeb2746aa55a980650'
    }
})