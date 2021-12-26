import classes from "./app.module.css";
import { CurrentPage } from "./components";

const App = () => {
  return (
    <div className={classes.app}>
      <CurrentPage />
    </div>
  );
};

export default App;
