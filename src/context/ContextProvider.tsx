import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { user } from "../db";
import { AppContext } from "./AppContext";
import { UserData } from "./interfaces";

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
  const [userData, setUserData] = useState<UserData>(user);
  const db = getDatabase();
  const getTaskCard = async () => {
    try {
      setLoading(true);
      const reference = ref(db, userId);
      onValue(reference, (snapshot) => {
        const data = snapshot.val();
        setUserData(data);
      });
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    getTaskCard();
  }, []);
  const value = {
    userId,
    setUserId,
    loading,
    error,
    userData,
    getTaskCard,
    setUserData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { ContextProvider };
