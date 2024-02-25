import "./App.css";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

// импорты компонентов
import AuthPage from "../AuthPage/AuthPage";
import MainPage from "../MainPage/MainPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { photosArray, PhotosContext } from "../../utils/constants";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    localStorage.isLogin && setIsLogin(JSON.parse(localStorage.isLogin));
  }, [isLogin]);

  function authorization() {
    localStorage.setItem("isLogin", "true");
    setIsLogin(true);
    history.push("/hotels");
  }

  function logout() {
    localStorage.clear();
    setIsLogin(false);
  }

  return (
    <PhotosContext.Provider value={photosArray}>
      <div className="page">
        <Switch>
          <Route exact path="/test-task-to-liis/sign-in">
            {isLogin ? (
              <Redirect to="/test-task-to-liis/hotels" />
            ) : (
              <AuthPage onLogin={authorization} />
            )}
          </Route>
          <ProtectedRoute
            exact
            path="/test-task-to-liis/hotels"
            component={MainPage}
            loggedIn={isLogin}
            onLogout={logout}
          />
          <ProtectedRoute
            path="/test-task-to-liis/"
            component={Redirect}
            loggedIn={isLogin}
            to="/test-task-to-liis/hotels"
          />
        </Switch>
      </div>
    </PhotosContext.Provider>
  );
}
