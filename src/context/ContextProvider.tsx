import { getDatabase, onValue, ref } from "firebase/database";
import { useReducer, useState } from "react";
import { AppContext } from "./AppContext";
import { AppReducer } from "../reducers";
import { state } from "../reducers";

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}
const ContextProvider = ({ children }: ContextProviderProps) => {
  const [userId, setUserId] = useState(() => {
    try {
      const uid = localStorage.getItem("userId");
      return uid !== null ? JSON.parse(uid) : "";
    } catch (error) {
      return "";
    }
  });
  const initialState: state = {
    userId: userId,
    email: "",
    taskCards: {},
    loading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const db = getDatabase();
  const getTaskCard = async () => {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });
      const reference = ref(db, userId);
      onValue(reference, (snapshot) => {
        const data = snapshot.val();
        dispatch({
          type: "SET_TASKCARDS",
          payload: data.taskCards,
        });
      });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err,
      });
      console.log(err);
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };

  const value = {
    state,
    dispatch,
    getTaskCard,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider };
