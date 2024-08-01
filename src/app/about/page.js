"use client";
import { useState, useEffect } from "react";

export default function About() {
  const [aboutContent, setAboutContent] = useState([]);
  const [missionContent, setMissionContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resAbout = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/about`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );
        const resMission = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/mission`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );

        if (resAbout.ok && resMission.ok) {
          const dataAbout = await resAbout.json();
          const dataMission = await resMission.json();

          const formattedAbout = dataAbout.data.attributes.about.map(
            (para, index) => (
              <p key={index} className="mb-4">
                {para.children.map((child) => child.text).join(" ")}
              </p>
            )
          );

          const formattedMission = (
            <p className="mb-4">{dataMission.data.attributes.mission}</p>
          );

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
    <div className="container mx-auto px-4 py-8">
      <h1>Sobre Creatyum</h1>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          {aboutContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="col-span-12 md:col-span-3">
          <p>{missionContent}</p>
        </div>
      </div>
    </div>
  );
}
