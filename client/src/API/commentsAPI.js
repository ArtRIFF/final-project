import { sendAuthorizedRequest } from "../helpers/sendRequest";
import { API } from "../config/API";

export const getComments = () =>
sendAuthorizedRequest(`${API}comments`, "GET")