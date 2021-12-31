import { createContext, Dispatch, SetStateAction } from "react";

interface AppContextProps {
  userId: any;
  setUserId: Dispatch<SetStateAction<any>>;
}

const AppContext = createContext({} as AppContextProps);

export { AppContext };
