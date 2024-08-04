"use client";
import { useState, useEffect } from "react";
import { FormatContent } from "@/components/FormatContent";

export default function AboutPage() {
  const [aboutContent, setAboutContent] = useState([]);
  const [missionContent, setMissionContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resAbout = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );
        const resMission = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/mission`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );

        if (resAbout.ok && resMission.ok) {
          const dataAbout = await resAbout.json();
          const dataMission = await resMission.json();

          const formattedAbout = FormatContent(dataAbout.data.attributes.about);
          const formattedMission = <p>{dataMission.data.attributes.mission}</p>;

          setAboutContent(formattedAbout);
          setMissionContent(formattedMission);
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto px-8 py-8 md:px-0">
      <h1>Sobre Creatyum</h1>

      <div className="grid grid-cols-12 gap-4 md:gap-12">
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-extrabold text-7xl pb-16 md:text-9xl">
            Sobre Creatyum
          </h2>
          {aboutContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="border border-solid border-black p-8 dark:border-yellow">
            <h3 className="font-extrabold text-5xl mb-4">Misión</h3>
            {missionContent}
          </div>
        </div>
      </div>
    </div>
  );
}
