import React from "react";
import { Link, Route, useHistory } from 'react-router-dom'
import logo from "../images/logo.svg";
import "../index.css";

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
          <div className="header__user-containter">
            <div classname="header__user"></div>
            <button onClick={signOut} className="header__user-signout">Выйти</button>
          </div>
        </header>
      </Route>
      <Route path="/sign-in">
        <header className="header">
          <img className="header__logo" src={logo} alt="logo.pic" />
          <Link></Link>
        </header>
      </Route>
      <Route path="/sign-up">
        <header className="header">
          <img className="header__logo" src={logo} alt="logo.pic" />
          <Link></Link>
        </header>
      </Route>
    </Switch>


  );
}

export default Header;
