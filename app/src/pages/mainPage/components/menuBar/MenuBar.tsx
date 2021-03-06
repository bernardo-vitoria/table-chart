import "pages/mainPage/components/menuBar/menuBar.scss";
import { SubPagesNames } from "pages/mainPage";
import React from "react";

type MenuBarProps = {
  subPage: SubPagesNames;
  setSubPage: (value: SubPagesNames) => void;
};

const MenuBar: React.FC<MenuBarProps> = ({ subPage, setSubPage }) => {
  return (
    <ul data-testid="menuBar">
      <li
        className={`${subPage === SubPagesNames.TABLE ? "active" : null}`}
        onClick={() => setSubPage(SubPagesNames.TABLE)}
      >
        <p>{"Table"}</p>
      </li>
      <li
        className={`${subPage === SubPagesNames.CHART ? "active" : null}`}
        onClick={() => setSubPage(SubPagesNames.CHART)}
      >
        <p>{"Chart"}</p>
      </li>
    </ul>
  );
};

export default MenuBar;
