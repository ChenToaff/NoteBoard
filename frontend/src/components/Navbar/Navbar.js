import { useEffect, useState } from "react";
import edit from "assets/images/edit.png";
import { useLocation } from "react-router-dom";
import logout from "assets/images/logout.png";
import home from "assets/images/home.png";
import "./Navbar.css";
import authService from "services/authService";

export default function Navbar() {
  const location = useLocation();
  const [props, setProps] = useState({
    src: edit,
    href: "/edit",
    onClick: null,
  });

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand ps-3" href="/">
        NoteBoard
      </a>

      {location.pathname === "/home" && (
        <a
          className="mx-3"
          onClick={async () => await authService.logout()}
          href={props.href}
        >
          <img src={logout} width="30" height="30" alt="logout"></img>
        </a>
      )}
    </nav>
  );
}
