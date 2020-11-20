import React from "react";
import { Link, Route, useHistory, Switch } from 'react-router-dom'
import logo from "../images/logo.svg";
import "../index.css";

import { removeToken } from "../utils/token";


function Header() {
  const history = useHistory();
  function signOut() {
    removeToken()
    history.push('/signup');
  }

  /// НАПИСАТЬ СТИЛИ ДОПИСАТЬ РАЗМЕТКУ

  return (
    <Switch>
      <Route exact path="/">
        <header className="header">
          <img className="header__logo" src={logo} alt="logo.pic" />
          <div className="header__user-container">
            <div className="header__user">email@email</div>
            <Link onClick={signOut} className="header__user-link">Выйти</Link>
          </div>
        </header>
      </Route>
      <Route path="/signin">
        <header className="header">
          <img className="header__logo" src={logo} alt="logo.pic" />
          <div className="header__user-container header__user-container_logout">
            <Link to="/signup" className="header__user-link header__user-link_logout">Регистрация</Link>
          </div>
        </header>
      </Route>
      <Route path="/signup">
        <header className="header">
          <img className="header__logo" src={logo} alt="logo.pic" />
          <div className="header__user-container header__user-container_logout">
            <Link to="/signin" className="header__user-link header__user-link_logout">Вход</Link>
          </div>
        </header>
      </Route>
    </Switch>


  );
}

export default Header;
