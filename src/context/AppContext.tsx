import { createContext, Dispatch, SetStateAction } from "react";
import { ActionType, state } from "../reducers";
import { UserData, TaskCardPropsExtend } from "./interfaces";

interface AppContextProps {
  state: state;
  dispatch: Dispatch<ActionType>;
  getTaskCard: () => Promise<void>;
}

const AppContext = createContext({} as AppContextProps);

export { AppContext };
