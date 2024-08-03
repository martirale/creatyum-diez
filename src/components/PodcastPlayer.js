"use client";

import React, { useState, useEffect } from "react";
import Parser from "rss-parser";

const PodcastPlayer = () => {
  const [latestEpisode, setLatestEpisode] = useState(null);
  const [otherEpisodes, setOtherEpisodes] = useState([]);
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

        if (filteredEpisodes.length > 0) {
          setLatestEpisode(filteredEpisodes[0]);
          setOtherEpisodes(filteredEpisodes.slice(1));
        }
      } catch (error) {
        console.error("Error fetching podcast episodes:", error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <div className="container mx-auto px-8 py-8 md:px-0">
      {latestEpisode && (
        <div className="grid grid-cols-12 items-center border border-solid border-black bg-black text-yellow dark:border-yellow dark:bg-yellow dark:text-black">
          <div className="col-span-12 md:col-span-6">
            <div className="w-100 h-100 overflow-hidden">
              <img
                src={latestEpisode.itunes.image}
                alt={latestEpisode.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="p-4 md:p-10">
              <h2 className="font-extrabold text-3xl md:text-9xl">
                {latestEpisode.title}
              </h2>
              <audio controls className="w-full mt-4">
                <source src={latestEpisode.enclosure.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastPlayer;
