import {
    API_URL,
   // API_GET_INFO,
  //  API_GET_TAG

} from './config';


const defaultConfig = {
    method : 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
};

export default {
    fetchInfos: async (searchTerm, id) => {
        const endpoint = searchTerm
        ? `${API_URL}get/search/${searchTerm}/${id}`
        : `${API_URL}get/${id}`;
      return await (await fetch(endpoint)).json();
    },
    fetchInfo: async (id) => {
        const endpoint = `${API_URL}get/${id}`;
        return await (await fetch(endpoint)).json();

    },
// Fix Tag Later
    fetchTag: async (id) => {
        const endpoint = `${API_URL}tag/${id}`;
        return await (await fetch(endpoint)).json();
    }
}


//export default Api;