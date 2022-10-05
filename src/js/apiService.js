import axios from 'axios'
export default apiService 

axios.defaults.baseURL = 'https://pixabay.com/api/'
const API_KEY = '30379093-c6893e7e1a44e122606b3a5b3'

async function apiService(query, page, perPage) {

    const response = await axios.get(`?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,)
    return response
  }