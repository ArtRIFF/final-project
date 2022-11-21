import { createContext, useState } from "react";

export const ViewContext = createContext({});

const ViewProvider = ({ children }) => {
  const [rowView, setRowView] = useState(false);
  const changeInRowView = (value) => {
    setRowView(value);
  };
  return (
    <ViewContext.Provider value={{ rowView, changeInRowView }}>
      {children}
    </ViewContext.Provider>
  );
};

export default ViewProvider;
