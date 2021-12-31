import { createContext, Dispatch, SetStateAction } from "react";

interface AppContextProps {
  userId: string;
  email?: string;
  setState: Dispatch<SetStateAction<any>>;
}

const AppContext = createContext({} as AppContextProps);

export { AppContext };
