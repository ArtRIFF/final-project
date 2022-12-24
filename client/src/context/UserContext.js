import React, {createContext, useEffect, useState} from "react";
import {sendAuthorizedRequest} from "../helpers/sendRequest";
import {API} from "../config/API";

export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState('')

  useEffect(() => {
    sendAuthorizedRequest(`${API}customers/customer`, "GET",).then(user => setUserInfo(user))
  }, [])
  const value = {
    userInfo,
    setUserInfo,
    token,
    setToken,
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}