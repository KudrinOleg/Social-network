import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  let likes = 0;
  return <div className={s.content}>
    <div className={s.item}>
      <img src="https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg" alt="" />
    </div>
    <div>
      {props.message}
    </div>
    <div>
      <span>Меня лайкнули{props.like}</span>
    </div>
  </div>
}

export default Post;