import React from "react";

const EditPost = (props) => {
  return (
    <div>
      <form>
        <h1>Edit Post</h1>
        <input
          type="text"
          placeholder="title"
          defaultValue={props.ttle}
          onChange={props.saveTitleToState}
          required
        ></input>
        <br />
        <textarea
          placeholder="content"
          defaultValue={props.content}
          onChange={props.saveContentToState}
          required
        ></textarea>
        <br />
        <button onClick={props.updatePost}>Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
