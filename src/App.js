import React, { useState } from "react";
import "./App.css";
import UrlShortener from "./components/UrlShortener";
import ShortenedUrlDisplay from "./components/ShortenedUrlDisplay";

function App() {
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleUrlShortened = (url) => {
    setShortenedUrl(url);
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <UrlShortener onUrlShortened={handleUrlShortened} />
      {shortenedUrl && <ShortenedUrlDisplay shortenedUrl={shortenedUrl} />}
    </div>
  );
}

export default App;
