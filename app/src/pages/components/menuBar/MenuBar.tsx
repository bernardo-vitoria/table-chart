import "pages/components/menuBar/menuBar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

enum Routes {
  TABLE = "/",
  CHART = "/chart",
}

const MenuBar = () => {
  const { pathname } = useLocation();

  return (
    <ul>
      <li className={`${pathname === Routes.TABLE ? "active" : null}`}>
        <Link to={"/"}>{"Table"}</Link>
      </li>
      <li className={`${pathname === Routes.CHART ? "active" : null}`}>
        <Link to={"/chart"}>{"Chart"}</Link>
      </li>
    </ul>
  );
};

export default MenuBar;
