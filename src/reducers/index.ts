import { props as TaskCardProps } from "../components/taskCard/interfaces";

interface state {
  userId: string;
  email: string;
  taskCards: { [key: string]: TaskCardProps };
  loading: boolean;
  error: any;
}
type ActionType =
  | {
      type: "SET_LOADING";
      payload: boolean;
    }
  | { type: "SET_ERROR"; payload: any }
  | {
      type: "SET_TASKCARDS";
      payload: { [key: string]: TaskCardProps };
    }
  | { type: "SET_USERID"; payload: string };

const AppReducer = (state: state, action: ActionType) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        taskCards: { ...state.taskCards },
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        taskCards: { ...state.taskCards },
        error: action.payload,
      };
    case "SET_TASKCARDS":
      return {
        ...state,
        taskCards: action.payload,
      };
    case "SET_USERID":
      return {
        ...state,
        userId: action.payload,
      };

    default:
      return state;
  }
};

export { AppReducer };
export type { ActionType, state };
