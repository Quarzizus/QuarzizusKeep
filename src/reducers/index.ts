import { props as TaskCardProps } from "../components/taskCard/interfaces";

interface state {
  userId: string;
  email: string;
  photo: string;
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
  | { type: "SET_USERID"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PHOTO"; payload: string };

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
    case "SET_EMAIL":
      return {
        ...state,
        taskCards: { ...state.taskCards },
        email: action.payload,
      };
    case "SET_PHOTO":
      return {
        ...state,
        taskCards: { ...state.taskCards },
        photo: action.payload,
      };
    default:
      return state;
  }
};

export { AppReducer };
export type { ActionType, state };
