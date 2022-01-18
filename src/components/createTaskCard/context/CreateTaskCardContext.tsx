import { child, getDatabase, push, ref } from "firebase/database";
import { createContext, Dispatch, useContext, useReducer, useRef } from "react";
import { AppContext } from "../../../context/AppContext";
import { ActionType, CreateTaskCardReducer } from "../reducers";
import { state } from "../reducers";

interface props {
  children: JSX.Element | JSX.Element[];
}

interface ContextProps {
  state: state;
  dispatch: Dispatch<ActionType>;
}
const CreateTaskCardContext = createContext({} as ContextProps);

const CreateTaskCardProvider = ({ children }: props) => {
  const {
    state: { userId },
  } = useContext(AppContext);
  const db = getDatabase();
  const reference = useRef<HTMLParagraphElement>({} as HTMLParagraphElement);
  const id = push(child(ref(db), userId)).key;
  const initialState: state = {
    open: false,
    title: "Title",
    tasks: {},
    createTaskInTaskCardRef: reference,
    taskCardId: id,
  };

  const [state, dispatch] = useReducer(CreateTaskCardReducer, initialState);

  const value: ContextProps = {
    dispatch,
    state,
  };
  return (
    <CreateTaskCardContext.Provider value={value}>
      {children}
    </CreateTaskCardContext.Provider>
  );
};

export { CreateTaskCardProvider, CreateTaskCardContext };
