import classes from "./app.module.css";
import { CurrentPage, CustomAlert } from "./components";
import { useBrowserBackButtonEventListener } from "./utilities";

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
