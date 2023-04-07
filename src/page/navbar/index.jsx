import React from "react";
import s from "./style.module.scss";
import logo from "./assets/Pompeo.svg";

export default function Navbar() {
  return (
    <div className={s.navbar}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={s.navbar_right}>
        <ul>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Shop</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Journal</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
          <li>
            <a href="#!">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
