import { createContext, Dispatch, SetStateAction } from "react";
import { UserData } from "./interfaces";

interface AppContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<any>>;
  loading: boolean;
  error: any;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<any>>;
  getTaskCard: () => Promise<void>;
  taskCards: any;
  setTaskCards: Dispatch<SetStateAction<any>>;
}

const AppContext = createContext({} as AppContextProps);

export { AppContext };
