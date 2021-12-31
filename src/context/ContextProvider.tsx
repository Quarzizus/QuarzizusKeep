import { useState } from "react";
import { AppContext } from "./AppContext";

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [userId, setUserId] = useState("0000");
  console.log(userId);
  const value = {
    userId,
    setUserId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider };
