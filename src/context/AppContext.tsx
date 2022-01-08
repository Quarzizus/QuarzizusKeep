import { createContext, Dispatch, SetStateAction } from "react";
import { UserData, TaskCardPropsExtend } from "./interfaces";

interface AppContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<any>>;
  loading: boolean;
  error: any;
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  getTaskCard: () => Promise<void>;
  taskCards: TaskCardPropsExtend;
  setTaskCards: Dispatch<SetStateAction<TaskCardPropsExtend>>;
}

const AppContext = createContext({} as AppContextProps);

export { AppContext };
