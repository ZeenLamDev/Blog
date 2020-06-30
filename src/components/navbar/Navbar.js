import React from "react";

import Post from "../posts/Post";
import CreatePost from "../posts/CreatePost";

const Navbar = () => {
  return (
    <div>
      <Post />
      <CreatePost />
    </div>
  );
};

export default Navbar;
