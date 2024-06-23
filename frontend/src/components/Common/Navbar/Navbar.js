import { useEffect, useState } from "react";
import edit from "assets/images/edit.png";
import { useLocation } from "react-router-dom";
import logout from "assets/images/logout.png";
import cookie from "react-cookies";
import home from "assets/images/home.png";
import "./Navbar.css";

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
        <a className="ms-auto" href={"/edit"}>
          <img src={edit} width="30" height="30" alt="edit"></img>
        </a>
      )}
      {location.pathname === "/edit" && (
        <a className="ms-auto" href={"/home"}>
          <img src={home} width="30" height="30" alt="edit"></img>
        </a>
      )}
      {location.pathname !== "/login" && (
        <a
          className="mx-3"
          onClick={() => cookie.remove("token", { path: "/" })}
          href={props.href}
        >
          <img src={logout} width="30" height="30" alt="logout"></img>
        </a>
      )}
    </nav>
  );
}
