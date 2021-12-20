import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-quote" activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
