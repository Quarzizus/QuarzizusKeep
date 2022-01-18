import { props as TaskProps } from "../../task/interfaces";

type ActionType =
  | { type: "HANDLE_OPEN" }
  | { type: "SET_TITLE"; payload: string }
  | { type: "PRINT_DATA" }
  | { type: "ADD_TASK"; payload: { [key: string]: TaskProps } };

interface state {
  open: boolean;
  title: string;
  tasks: { [key: string]: TaskProps };
  taskCardId: string | null;
}

const taskCardReducer = (state: state, action: ActionType) => {
  switch (action.type) {
    case "HANDLE_OPEN":
      return {
        ...state,
        tasks: { ...state.tasks },
        open: !state.open,
      };
    case "SET_TITLE":
      return {
        ...state,
        tasks: { ...state.tasks },
        title: action.payload,
      };
    case "PRINT_DATA":
      console.log({
        title: state.title,
        tasks: state.tasks,
        id: state.taskCardId,
      });
      return state;

    case "ADD_TASK":
      return {
        ...state,
        tasks: {
          ...state.tasks,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export { taskCardReducer };
export type { state, ActionType };
