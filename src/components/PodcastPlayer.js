"use client";

import { useState, useEffect } from "react";
import Parser from "rss-parser";

const parser = new Parser();

const PodcastPlayer = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const feed = await parser.parseURL(
          "https://anchor.fm/s/a59b2a8/podcast/rss"
        );
        setEpisodes(feed.items);
      } catch (error) {
        console.error("Error fetching podcast feed:", error);
      }
    };

    fetchPodcast();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Podcast</h2>
      <div className="space-y-4">
        {episodes.map((episode) => (
          <div key={episode.guid} className="p-4 border rounded-lg shadow">
            <img
              src={episode.itunes.image}
              alt={episode.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold">{episode.title}</h3>
            <p className="text-gray-700">{episode.contentSnippet}</p>
            <audio controls className="w-full mt-4">
              <source src={episode.enclosure.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastPlayer;
