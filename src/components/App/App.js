import "./App.css";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTodayData } from "../../utils/constants";

// импорты компонентов
import AuthPage from "../AuthPage/AuthPage";
import MainPage from "../MainPage/MainPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [searchingLocation, setSearchingLocation] = useState("Москва");
  const [searchingDate, setSearchingDate] = useState(getTodayData());
  const [searchingDays, setSearchingDays] = useState(1);
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

  function searchHotels({ location, date, days }) {
    setSearchingLocation(location);
    setSearchingDate(date);
    setSearchingDays(days);
    console.log(new Date(date + 1));
  }
  return (
    <div className="page">
      <Switch>
        <Route exact path="/sign-in">
          {isLogin ? (
            <Redirect to="/hotels" />
          ) : (
            <AuthPage onLogin={authorization} />
          )}
        </Route>
        <ProtectedRoute
          exact
          path="/hotels"
          component={MainPage}
          loggedIn={isLogin}
          onLogout={logout}
          onSearchHotels={searchHotels}
          searchingLocation={searchingLocation}
          searchingDate={searchingDate}
          searchingDays={searchingDays}
        />
        <ProtectedRoute
          path="/"
          component={Redirect}
          loggedIn={isLogin}
          to="/hotels"
        />
      </Switch>
    </div>
  );
}
