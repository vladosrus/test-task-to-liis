import "./App.css";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

// импорты компонентов
import AuthPage from "../AuthPage/AuthPage";

export default function App() {
  const history = useHistory();

  function authorization() {
    history.push("/hotels");
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/sign-in">
          <AuthPage onLogin={authorization} />
        </Route>
        <Route exact path="/hotels">
          {" "}
        </Route>
        <Route path="/">
          <Redirect to="/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}
