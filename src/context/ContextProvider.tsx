import { getDatabase, onValue, ref } from "firebase/database";
import { useReducer, useState } from "react";
import { AppContext } from "./AppContext";
import { AppReducer } from "../reducers";
import { state } from "../reducers";
import { getLocalStorage } from "../utils/getLocalStorage";

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}
const ContextProvider = ({ children }: ContextProviderProps) => {
  const initialState: state = {
    userId: getLocalStorage("userId"),
    email: getLocalStorage("email"),
    photo: getLocalStorage("photo"),
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
      const reference = ref(db, initialState.userId);
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
