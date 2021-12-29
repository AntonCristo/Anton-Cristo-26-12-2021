import { useBrowserBackButtonEventListener, useIsDarkMode } from "src/hooks";

import { CurrentPage, CustomAlert } from "./components";

import classes from "./app.module.css";

const App = () => {
  const isDarkMode = useIsDarkMode();
  useBrowserBackButtonEventListener();

  return (
    <div className={[classes.app, isDarkMode && classes.darkMode].join(" ")}>
      <CurrentPage />
      <CustomAlert />
    </div>
  );
};

export default App;
