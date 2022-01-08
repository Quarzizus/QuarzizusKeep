import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { squeleton } from "../db/index";
import { AppContext } from "./AppContext";
import { TaskCardPropsExtend, UserData } from "./interfaces";
import { props as TaskCardProps } from "../components/taskCard/interfaces";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [userData, setUserData] = useState<UserData>(squeleton);
  const [taskCards, setTaskCards] = useState<TaskCardPropsExtend>(() => {
    return Object.values(userData.taskCards);
  });

  const db = getDatabase();
  const getTaskCard = async () => {
    try {
      setLoading(true);
      const reference = ref(db, userId);
      onValue(reference, (snapshot) => {
        const data = snapshot.val();
        const cards = Object.values(data.taskCards);
        setTaskCards(cards);
      });
      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
      setLoading(false);
    }
  };

  const value = {
    userId,
    setUserId,
    loading,
    error,
    userData,
    getTaskCard,
    setUserData,
    taskCards,
    setTaskCards,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider };
