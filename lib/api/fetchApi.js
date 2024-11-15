const fetchApi = async ({
    method,
    controller,
    action,
    params = {},
    body = null,
    page = 1,
    pageSize = 10,
  }) => {
    // API URL temel yapısı
    // let apiUrl = `${process.env._API_URL}/api/${controller}/${action}`;
    const URL='https://jsonplaceholder.typicode.com';
    let apiUrl = `${URL}/${controller}${action}?_page=${page}&_limit=${pageSize}`;

    const headers = {
      'Content-Type': 'application/json',
    };
  

  
    const options = {
      method: method, // GET veya POST
      headers: headers,
    };
  
    // POST isteği ise body parametresi ekleniyor
    if (method === 'POST' && body) {
      options.body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
  
      const data = await response.json();

      return response;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };
  
  export default fetchApi;