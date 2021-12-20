import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
