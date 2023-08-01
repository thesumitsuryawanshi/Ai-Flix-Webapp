import React from "react";
import "./Card.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShare,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {


  const { score, upVoteClicked, downVoteClicked } = props;

  
  return (
    <div class="card">
      <div className="cardheader">
        <div class="voting-section">
          <div className="voting-section-content">
            <div className="profile-icons">
              <span className="upvote-icon" onClick={upVoteClicked}>
                &#9650;
              </span>
              {/* <span className="coin-icon">🪙</span> */}
              <h3> {props.score}</h3>
              <span className="downvote-icon" onClick={downVoteClicked}>
                &#9660;
              </span>
            </div>
          </div>
        </div>
        <ReactPlayer controls autoPlay={true} url={props.videoUrl} />
      </div>
      <div className="title">
        <div className="card-title">{props.title}</div>
        <p className="card-text">{/* {props.desc} */}</p>
      </div>

      <div className="card-like-bar">
        <div className="card-icon">
          <button className="button-decoration" onClick={handleCommentClick}>
            <FontAwesomeIcon icon={faComment} /> Comment
          </button>
        </div>

        <div className="card-icon" onClick={handleShareClick}>
          <button className="button-decoration">
            <FontAwesomeIcon icon={faShare} /> Share
          </button>
        </div>

        <div className="card-icon" onClick={handleSaveClick}>
          <button className="button-decoration">
            <FontAwesomeIcon icon={faBookmark} /> Save
          </button>
        </div>
      </div>
    </div>
  );
}

function handleSaveClick() {
  alert("Bookmarked saved.");
}

function handleCommentClick() {
  alert("Open Specific Video in new page for comment");
}
function handleShareClick() {
  alert("Share this Video to Prompt.");
}

function upVoteClicked() {
  alert("upVote");
}
function downVoteClicked() {
  alert("downVote");
}
