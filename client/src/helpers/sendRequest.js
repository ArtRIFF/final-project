// export const sendRequest = async (url) => {
// 	const response = await fetch(url);
// 	const result = await response.json();
// 	return result;
// }

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzhhODg1YzViYTE3MDA0ZTJhNmNkYSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJBZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTUzNjUzNCwiZXhwIjoxNjY5NTcyNTM0fQ.tfkDD0Z7LCb_T4UQxZEuxRfotTPgbxuFDNd1LrmUqvY";
const API = `https://final-backend-new.onrender.com/api/`;

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
export const getOneCards = (id) =>
  sendRequest(`${API}products/${id}`, "GET", {
    headers: {
      Authorization: token,
    },
  });