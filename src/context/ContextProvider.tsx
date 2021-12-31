import { useState } from "react";
import { AppContext } from "./AppContext";

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [userId, setUserId] = useState(() => {
    try {
      const uid = localStorage.getItem("userId");
      return uid !== null ? JSON.parse(uid) : "";
    } catch (error) {
      return "";
    }
  });
  const value = {
    userId,
    setUserId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider };
