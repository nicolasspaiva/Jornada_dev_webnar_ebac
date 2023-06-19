import React, { useState } from "react";
import "./videosidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function Videosidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  function handdlelike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div onClick={handdlelike} className="videosidebar_op">
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar_op">
        <ChatIcon fontSize="large" />
        <p> {messages} </p>
      </div>
      <div className="videosidebar_op">
        <ShareIcon fontSize="large" />
        <p> {shares}</p>
      </div>
    </div>
  );
}

export default Videosidebar;
