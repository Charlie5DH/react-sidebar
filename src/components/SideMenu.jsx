import React, { useState } from "react";
import {
  FaChartLine,
  FaChartPie,
  FaUserCog,
  FaBook,
  FaIndustry,
  FaTicketAlt,
} from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { TouchApp } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";
import "./SideMenu.css";

const menuItems = [
  {
    name: "Locations",
    to: "/",
    exact: true,
    icon: <i class="bi bi-geo-alt-fill" />,
  },
  {
    name: "Overview",
    exact: true,
    icon: <FaChartPie />,
    to: "/overview",
    subMenus: [
      { name: "Charts", icon: <FcAreaChart />, to: "/overview/charts" },
      { name: "Tickets", icon: <FaTicketAlt />, to: "/overview/tickets" },
    ],
  },
  { name: "Plant Scheme", icon: <FaIndustry />, to: "/plant" },
  {
    name: "Analytics",
    icon: <i class="bi bi-bar-chart-fill" />,
    to: "/analytics",
  },
  { name: "Predictive", icon: <FaChartLine />, to: "/predictive" },
  { name: "Schedule", icon: <i class="bi bi-calendar3" />, to: "/schedule" },
  {
    name: "Actions",
    icon: <TouchApp />,
    to: "/actions",
  },
  {
    name: "Chat",
    icon: <i class="bi bi-chat-left-dots-fill" />,
    to: "/contact",
  },
  {
    name: "Documentation",
    icon: <i class="bi bi-file-earmark-text-fill" />,
    to: "/documentation",
  },
  { name: "Users", icon: <FaUserCog />, to: "/users" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  React.useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }

    props.onCollapse(inactive);
  }, [inactive]);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className={`logo ${inactive ? "inactive" : ""}`}>
          <NavLink to={"/"} className="link">
            {inactive ? <span>VA</span> : <span>ViberAir</span>}
          </NavLink>
        </div>

        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-circle-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-circle-fill"></i>
          )}
        </div>
      </div>

      {/* <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search" />
        </button>
        <input type="text" placeholder="search" />
      </div> */}

      <div className="divider" />

      <div className="main-menu">
        <ul>
          {menuItems.slice(0, 7).map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              icon={menuItem.icon}
              exact={menuItem.exact}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="divider middle" />

      <div className="main-menu">
        <ul>
          {menuItems.slice(7).map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              icon={menuItem.icon}
              exact={menuItem.exact}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="footer-avatar">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="user-logged"
          />
        </div>

        <div className="user-info">
          <h5>Jane Doe</h5>
          <p>janedoe@gmail.com</p>
          <p>engineer</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
