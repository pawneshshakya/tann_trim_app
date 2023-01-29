import React from "react";
import "./navbarStyle.css";
import { Search, Bookmark, Person, LocalMall } from "@mui/icons-material";

const Navbar = () => {
  return (
    <>
      <div className="main-nav">
        <div className="header">
          <span className="title">TANN TRIM</span>
        </div>
        <div className="icons-group">
          <ul className="icons">
            <li>
              <Search />
            </li>
            <li>
              <Person />
            </li>
            <li>
              <Bookmark />
            </li>
            <li>
              <LocalMall />
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-nav">
        <ul className="list-name">
          <li>Bags</li>
          <li>Travel</li>
          <li>Accesories</li>
          <li>Gifting</li>
          <li>Jewelery</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
