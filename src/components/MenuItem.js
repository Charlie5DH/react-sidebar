import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, icon, onClick, to, exact } = props;
  const [expand, setExpand] = React.useState(false);

  return (
    <li onClick={onClick}>
      <NavLink
        exact
        to={to}
        onClick={() => setExpand(!expand)}
        className="menu-item"
      >
        <div className="menu-icon">{icon}</div>
        <span>
          {name}{" "}
          {subMenus && subMenus.length > 0 ? (
            expand ? (
              <i class="bi bi-caret-up-fill"></i>
            ) : (
              <i class="bi bi-caret-down-fill" />
            )
          ) : (
            ""
          )}
        </span>
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
