import React from "react";

import { MyButton } from "../styles/Styles";

const CreatePost = (props) => {
  return (
    <div>
      <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input
          type="text"
          placeholder="title"
          onChange={props.saveTitleToState}
          required
          ref={props.getTitle}
        ></input>
        <br />
        <textarea
          placeholder="content"
          onChange={props.saveContentToState}
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <MyButton type="submit">Create Post</MyButton>
      </form>
    </div>
  );
};

export default CreatePost;
