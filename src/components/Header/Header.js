import { Link } from "react-router-dom";
import { siteName } from "../../utils/constants";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">{siteName}</h1>
      <Link className="header__logout-link-container" to="/" onClick={props.onLogout}>
        <p className="header__logout-link-text">Выйти</p>
        <div className="header__logout-link-img" />
      </Link>
    </header>
  );
}
