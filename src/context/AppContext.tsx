import { createContext, Dispatch, SetStateAction } from "react";
import { UserData } from "./interfaces";

interface AppContextProps {
  userId: any;
  setUserId: Dispatch<SetStateAction<any>>;
  loading: boolean;
  error: any;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<any>>;
  getTaskCard: () => Promise<void>;
}

const AppContext = createContext({} as AppContextProps);

export { AppContext };
