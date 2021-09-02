export const sendHttpRequest = async (method, url, data ) => {
  if(method === 'GET' || method === 'DELETE') {
    const response = await fetch(url, {
      method:method,
      headers: {
        'Accept': 'application/json',
      }
    })
    
    if(response.status >= 400) {
      const err = await response.json()
      throw err
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      return response.json()
    } else {
      return response.text()
    }
  }
  const response =  await fetch(url, {
    method:method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });
  if(response.status >= 400) {
    const err = await response.json();
    throw err
  }
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json()
  } else {
    return response.text()
  }
  // console.log('response', response);
  // return response.text();
}
const appID = 'n2gePywOhjdVEWf2vIlI'
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi`;

const getData = (url) => sendHttpRequest('GET', url, null)
const sendData = (url, data) => sendHttpRequest('POST', url, data);
const deleteData = (url) => sendHttpRequest('DELETE', url, null);

export { sendData, getData, deleteData, BASE_URL, appID }