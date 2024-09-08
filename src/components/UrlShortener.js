import React, { useState } from "react";

const UrlShortener = ({ onUrlShortened }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [Id, setId] = useState("");
  const [c, setC] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://backend-shortenurl.onrender.com/url",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: url }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      onUrlShortened("https://backend-shortenurl.onrender.com/" + data.id);
      setUrl("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalytics = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://backend-shortenurl.onrender.com/url/analytics/" + Id,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setC(data.totalClicks);
      setId("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <div style={{ margin: "5rem" }}>
        <form onSubmit={handleAnalytics}>
          <input
            type="Id"
            value={Id}
            placeholder="Enter your ID"
            onChange={(e) => setId(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Fetching..." : "Fetch Data"}
          </button>
        </form>
      </div>
      {c && <h1>Total Clicks : {c}</h1>}
    </div>
  );
};

export default UrlShortener;
