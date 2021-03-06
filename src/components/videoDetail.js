import React from "react";
import Loading from "./loading";

const VideoDetail = ({ video }) => {
  if (!video) return <Loading />;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="videoPlayer" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="ui">{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
