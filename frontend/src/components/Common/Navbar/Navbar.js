import { useEffect, useState } from "react";
import edit from "assets/images/edit.png";
import { useLocation } from "react-router-dom";
import logout from "assets/images/logout.png";
import cookie from "react-cookies";
import back from "assets/images/back.png";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [props, setProps] = useState({
    src: edit,
    href: "/edit",
    onClick: null,
  });

  useEffect(() => {
    let href = "/edit";
    let src = edit;
    let onClick = null;
    if (location.pathname == "/edit") {
      src = logout;
      href = "/login";
      onClick = () => cookie.remove("token", { path: "/" });
    } else if (location.pathname == "/login") {
      src = back;
      href = "/";
    }
    setProps({
      src,
      onClick,
      href,
    });
  }, [location]);

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand ps-3" href="/">
        NoteBoard
      </a>
      <a onClick={props.onClick} href={props.href} className="navbar-brand">
        <img src={props.src} width="30" height="30" alt="edit"></img>
      </a>
    </nav>
  );
}
