import React, {createContext, useEffect, useState} from "react";
import {sendAuthorizedRequest} from "../helpers/sendRequest";
import {API} from "../config/API";

export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState('')

  const clearToken = () => {
    sessionStorage.removeItem('token')
    setToken('')
  }

  useEffect(() => {
    sendAuthorizedRequest(`${API}customers/customer`, "GET",).then(user => setUserInfo(user)).catch(err => {
      console.log(err)
      setUserInfo(null)
    })
  }, [])
  const value = {
    userInfo,
    setUserInfo,
    token,
    setToken,
    clearToken,
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}