import { sendAuthorizedRequest } from "../helpers/sendRequest";
import { API } from "../config/API";

export const getCards = () =>
sendAuthorizedRequest(`${API}products`, "GET");

export const getOneCard = (id) =>
sendAuthorizedRequest(`${API}products/${id}`, "GET");


