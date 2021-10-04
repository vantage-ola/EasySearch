const defaultConfig = {
    method : 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
};

export default {
    fetchInfos: async (page, perPage) => {
        const endpoint = page
        ?`api/get?page=${page}&per-page=${perPage}`
        : `api/get?page=${page}`;
      return await (await fetch(endpoint)).json();
    },
    fetchInfo: async (id) => {
        const endpoint = `api/get/${id}`;
        return await (await fetch(endpoint)).json();

    },
// Fix Tag Later
    fetchTag: async (id) => {
        const endpoint = `api/tag/${id}`;
        return await (await fetch(endpoint)).json();
    }
}


//export default Api;
