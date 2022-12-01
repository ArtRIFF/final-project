import { API, token } from "../config/API";
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
      return new Error("error");
    }
  });
};
export const getCards = () =>
  sendRequest(`${API}products`, "GET", {
    headers: {
      Authorization: token,
    },
  });
export const getOneCard = (id) =>
  sendRequest(`${API}products/${id}`, "GET", {
    headers: {
      Authorization: token,
    },
  });