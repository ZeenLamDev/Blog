import React, { useState, useRef } from "react";

import CreatePost from "./CreatePost";
import Post from "./Post";
import EditPost from "./EditPost";

const PostList = () => {
  //State
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [createNewPost, setCreateNewPost] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  //Initialize useRef
  const getTitle = useRef();
  const getContent = useRef();

  //Helper
  const saveTitleToState = (e) => {
    setTitle(e.target.value);
  };

  const saveContentToState = (e) => {
    setContent(e.target.value);
  };

  const toggleCreateNewPost = () => {
    setCreateNewPost(!createNewPost);
  };

  const toggleEditPostComponent = () => {
    setIsEditPost(!isEditPost);
  };

  const editPost = (id) => {
    setEditPostId(id);
    console.log(id);
    toggleEditPostComponent();
  };

  const deletePost = (id) => {
    const editedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(editedPost);
  };

  const updatePost = (e) => {
    e.preventDefault();
    //Map through each post to get the correct post
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      console.log(eachPost);
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleEditPostComponent();
  };

  const savePost = (e) => {
    e.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    console.log(allPosts);
    setTitle("");
    setContent("");
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  if (createNewPost) {
    return (
      <div>
        <CreatePost
          saveTitleToState={saveTitleToState}
          saveContentToState={saveContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
      </div>
    );
  } else if (isEditPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });

    return (
      <EditPost
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
      />
    );
  }

  return (
    <div>
      <h2>All Posts</h2>
      {!allPosts.length ? (
        <div>
          <h3>There are no posts!</h3>
        </div>
      ) : (
        allPosts.map((eachPost) => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })
      )}
      <br />
      <br />
      <button onClick={toggleCreateNewPost}>Create New Post</button>
    </div>
  );
};

export default PostList;
