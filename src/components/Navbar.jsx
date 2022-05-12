import React from "react";
import s from "./Navbar.module.css";
const Navbar = () => {
    return <nav className={s.nav}>
    <div className={s.item}>
      Profile
    </div>
    <div>
      Messages
    </div>
    <div>
      News
    </div>
    <div>
      Music
    </div>
    <div>
      Settings
    </div>
  </nav>
}
export default Navbar;