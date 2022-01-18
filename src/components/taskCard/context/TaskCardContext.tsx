import { createContext, Dispatch, useReducer } from "react";
import { props as TaskProps } from "../../task/interfaces";
import { taskCardReducer } from "../reducers";
import { state, ActionType } from "../reducers/";

interface props {
  children: JSX.Element | JSX.Element[];
  title: string;
  tasks: { [key: string]: TaskProps };
  taskCardId: string | null;
}

interface ContextProps {
  state: state;
  dispatch: Dispatch<ActionType>;
}

const TaskCardContext = createContext({} as ContextProps);

const TaskCardProvider = ({ children, taskCardId, tasks, title }: props) => {
  const initialState: state = {
    open: false,
    title: title,
    tasks: tasks,
    taskCardId: taskCardId,
  };
  const [state, dispatch] = useReducer(taskCardReducer, initialState);

  const value: ContextProps = {
    state,
    dispatch,
  };

  return (
    <TaskCardContext.Provider value={value}>
      {children}
    </TaskCardContext.Provider>
  );
};

export { TaskCardContext, TaskCardProvider };
