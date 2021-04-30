import React from "react";
import { Link, NavLink } from "react-router-dom";
import jwdDecode from "jwt-decode";
import "./Navbar.css";

const Navbar = ({ history }) => {
  const st = {
    backgroundColor: "var(--secondary-color)",
    color: "#f7f4e6",
  };

  let user = jwdDecode(localStorage.getItem("authToken"));

  function logout() {
    localStorage.removeItem("authToken");
  }
  return (
    <div className="navbar container">
      <div className="logo">
        <div className="initials">{`${user.name[0]} ${user.surname[0]}`}</div>
        <div className="name">{`${user.name}`}</div>
      </div>

      <div className="right-nav">
        {user.isAdmin && (
          <Link to="/admin" className="adminLink">
            Admin
          </Link>
        )}
        <Link to="/" onClick={logout} className="logoutLink">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
