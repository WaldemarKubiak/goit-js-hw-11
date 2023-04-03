import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34859493-53a9b5cb834f8dfe1be273cf4';

export async function getPictures(searchTerm, page, perPage) {
  try {
    const response = await axios.get(
      `?key=${API_KEY}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    // console.log('response-RESPONSE: ', response);
    // console.log('response-DATA: ', response.data);
    // console.log('response-STATUS: ', response.status);
    // console.log('response-REQUEST: ', response.request);
    // console.log('response-HEADERS: ', response.headers);
    // console.log('response-CONFIG: ', response.config);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
