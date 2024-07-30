"use client";

import React, { useState, useEffect } from "react";
import Parser from "rss-parser";

const PodcastPlayer = () => {
  const [episodes, setEpisodes] = useState([]);
  const keyword = "temporada";
  const rssUrl = "https://anchor.fm/s/a59b2a8/podcast/rss";

  useEffect(() => {
    const fetchEpisodes = async () => {
      const parser = new Parser();
      try {
        const feed = await parser.parseURL(rssUrl);
        const filteredEpisodes = feed.items.filter(
          (item) =>
            item.content.includes(keyword) ||
            item.contentSnippet.includes(keyword)
        );
        setEpisodes(filteredEpisodes);
      } catch (error) {
        console.error("Error fetching podcast episodes:", error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {episodes.map((episode) => (
          <div key={episode.guid} className="bg-white shadow-md rounded-lg p-4">
            <div className="w-100 h-100 mb-4 overflow-hidden rounded-lg">
              <img
                src={episode.itunes.image}
                alt={episode.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{episode.title}</h3>
            <audio controls className="w-full mt-4">
              <source src={episode.enclosure.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastPlayer;
