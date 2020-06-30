import React from "react";

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <div>
      <section>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={() => editPost(id)}>Edit</button>
        <button onClick={() => deletePost(id)}>Delete</button>
      </section>
    </div>
  );
};

export default Post;
