import { useBrowserBackButtonEventListener } from "src/hooks";

import { CurrentPage, CustomAlert } from "./components";

import classes from "./app.module.css";

const App = () => {
  useBrowserBackButtonEventListener();

  return (
    <div className={classes.app}>
      <CurrentPage />
      <CustomAlert />
    </div>
  );
};

export default App;
