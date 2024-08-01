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
    <section className="container mx-auto px-8 py-8 md:px-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {episodes.map((episode) => (
          <div
            key={episode.guid}
            className="bg-yellow text-black border border-solid border-black hover:bg-black hover:text-yellow dark:bg-black dark:text-yellow dark:hover:bg-yellow dark:hover:text-black dark:border-yellow"
          >
            <div className="w-100 h-100 overflow-hidden">
              <img
                src={episode.itunes.image}
                alt={episode.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg">{episode.title}</h3>
              <audio controls className="w-full mt-4">
                <source src={episode.enclosure.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastPlayer;
