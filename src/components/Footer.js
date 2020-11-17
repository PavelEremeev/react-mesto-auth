import React from "react";
import "../index.css";

function Footer() {
  function getFullYear() {
    const newYear = new Date().getFullYear();
    return newYear;
  }

  return (
    <footer className="footer">
      <p className="footer__copyright">&copy;{getFullYear()} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
