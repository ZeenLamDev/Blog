import React from "react";

const CreatePost = (props) => {
  return (
    <>
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
        <button type="submit">Create Post</button>
      </form>
    </>
  );
};

export default CreatePost;
