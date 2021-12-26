import classes from "./app.module.css";
import { CurrentPage, CustomAlert } from "./components";

const App = () => {
  return (
    <div className={classes.app}>
      <CurrentPage />
      <CustomAlert />
    </div>
  );
};

export default App;
