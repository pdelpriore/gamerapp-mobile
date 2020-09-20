import { AsyncStorage } from "react-native";

export const hasToken = async () => {
  const token = await AsyncStorage.getItem("token");
  return token !== null;
};

export const persistToken = async token => {
  await AsyncStorage.setItem("token", token);
};
