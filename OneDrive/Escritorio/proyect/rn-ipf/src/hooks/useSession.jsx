import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react"

const useSession = () => {
  const [token, setToken] = useState(null);

  const getItem = async () => {
    const token = JSON.parse(await AsyncStorage.getItem("token"));
    setToken(token);
  };

  const login = async (token) => {
    await AsyncStorage.setItem("token", JSON.stringify(token));
    setToken(token);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    getItem();
  }, []);

  return { token, login, logout };
};

export default useSession
