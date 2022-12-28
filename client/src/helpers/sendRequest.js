import {API, token} from "../config/API";
// export const sendRequest = async (url) => {
// 	const response = await fetch(url);
// 	const result = await response.json();
// 	return result;
// }

export const sendRequest = async (url, method = "GET", config) => {
  return await fetch(url, {
    method,
    ...config,
  }).then((response) => {
    if (response.ok) {
      if (method === "GET" || method === "POST" || method === "PUT") {
        return response.json();
      }
      return response;
    } else {
      throw new Error("error");
    }
  })
};

export const sendAuthorizedRequest = (url, method = "GET", config) => {
  const token = sessionStorage.getItem('token');
  const headers = config?.headers
    ? {'Content-Type': 'application/json', 'Authorization': token, ...config.headers}
    : {'Content-Type': 'application/json', 'Authorization': token}
  return sendRequest(url, method, {...config, headers})
};


export const getCards = () =>
  sendAuthorizedRequest(`${API}products`, "GET");

export const getOneCard = (id) =>
  sendAuthorizedRequest(`${API}products/${id}`, "GET");

export const getComments = () =>
  sendAuthorizedRequest(`${API}comments`, "GET")