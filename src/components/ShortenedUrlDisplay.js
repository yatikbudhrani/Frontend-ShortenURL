import React from "react";

const ShortenedUrlDisplay = ({ shortenedUrl }) => {
  return (
    <div>
      <h2>Your Shortened URL</h2>
      <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
        {shortenedUrl}
      </a>
    </div>
  );
};

export default ShortenedUrlDisplay;
