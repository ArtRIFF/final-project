import React, {createContext, useState} from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState('')

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