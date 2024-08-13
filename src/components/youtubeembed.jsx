import React from "react";

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/kqtD5dpn9C8?si=Zbz96BVHzMwnIS_P&amp;controls=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
