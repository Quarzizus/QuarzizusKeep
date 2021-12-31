import { useState } from "react";
import { AppContext } from "./AppContext";

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}
interface AppContextProps {
  userId: string;
  email?: string;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [state, setState] = useState<AppContextProps>({
    userId: "",
  });

  const value = {
    ...state,
    setState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider };
