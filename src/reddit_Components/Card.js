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
  return (
    <div class="card">
      <div className="cardheader">
        <div class="voting-section">
          <div className="voting-section-content">
            <div className="profile-icons">
              <span className="upvote-icon">&#9650;</span>
              <span className="coin-icon">🪙</span>
              <span className="downvote-icon">&#9660;</span>
            </div>
          </div>
        </div>
        <ReactPlayer url='https://www.youtube.com/embed/QW-NFkVDfdA' />


        {/* <iframe
          width="560"
          height="430"
          src={props.videoUrl}
          //  src="https://www.youtube.com/embed/QW-NFkVDfdA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}


      </div>
      <div className="title">
        <div className="card-title">{props.title}</div>
        <p className="card-text">
          Hello hello we live we love we lie Hello hello we live we love we lie
          Hello hello we live we love we lie Hello hello we live we love we lie
          Hello hello we live we love we lie Hello hello we live we love we lie
        </p>
      </div>
      
      
        <div className="card-like-bar">
          <div  className="card-icon">
            <FontAwesomeIcon icon={faComment} /> Comment
          </div>

          <div className="card-icon">
            <FontAwesomeIcon icon={faShare} /> Share
          </div>

          <div className="card-icon">
            <FontAwesomeIcon icon={faBookmark} /> Save
          </div>
        </div>
    </div>

);
}
