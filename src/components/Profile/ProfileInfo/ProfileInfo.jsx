import React from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return <div className={s.content}>
    <div>
      <img src='https://c.wallhere.com/photos/fc/9a/1366x768_px_Canada_landscape_mountain_stars_Trees-1080526.jpg!d'></img>
    </div>
    <div className={s.descriptionBlock}>
      ava + description
    </div>

  </div>
}

export default ProfileInfo;