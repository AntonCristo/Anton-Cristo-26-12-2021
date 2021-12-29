import { useAppSelector } from "src/store";

export const useIsDarkMode = () => {
  const isDarkMode = useAppSelector((state) => state.darkModeReducer).darkMode;

  return isDarkMode;
};
