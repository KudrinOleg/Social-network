import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let posts = [
    { id: 1, message: 'Hi, how are you', like: '12' },
    { id: 2, message: 'Its my first posts', like: '10' },
  ]
  let postsElement = posts.map(p => <Post message={p.message} like={p.like} />)
  return (

    <div className={s.content}>
      <div>
        my posts
        <div className={s.postBlock}>
          {postsElement}
        </div>
        <div>
          <div className={s.postBlock}><textarea></textarea></div>
          <button>new post</button>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;