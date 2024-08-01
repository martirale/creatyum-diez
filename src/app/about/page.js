"use client";
import { useState, useEffect } from "react";

export default function AboutPage() {
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

          const formatText = (children) => {
            return children.map((child, index) => {
              if (child.type === "text") {
                let text = child.text;
                if (child.bold) text = <b key={index}>{text}</b>;
                if (child.italic) text = <em key={index}>{text}</em>;
                return text;
              }
              if (child.type === "link") {
                return (
                  <a
                    href={child.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {formatText(child.children)}
                  </a>
                );
              }
              return null;
            });
          };

          const formattedAbout = dataAbout.data.attributes.about.map(
            (block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="mb-4">
                    {formatText(block.children)}
                  </p>
                );
              }
              if (block.type === "image") {
                return (
                  <img
                    key={index}
                    src={block.image.url}
                    alt={block.image.alternativeText || ""}
                    className="my-4 max-w-full h-auto"
                  />
                );
              }
              if (block.type === "heading") {
                const HeadingTag = `h${block.level}`;
                return (
                  <HeadingTag key={index} className="text-2xl my-4 md:text-3xl">
                    {formatText(block.children)}
                  </HeadingTag>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-black italic pl-4 my-4"
                  >
                    {formatText(block.children)}
                  </blockquote>
                );
              }
              if (block.type === "list") {
                const ListTag = block.format === "ordered" ? "ol" : "ul";
                const listClass =
                  block.format === "ordered"
                    ? "list-decimal pl-6"
                    : "list-disc pl-6";
                return (
                  <ListTag key={index} className={listClass}>
                    {block.children.map((item, itemIndex) => (
                      <li key={itemIndex}>{formatText(item.children)}</li>
                    ))}
                  </ListTag>
                );
              }
              return null;
            }
          );

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

      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-9">
          <h2 className="text-4xl pb-8 md:text-5xl">Sobre Creatyum</h2>
          {aboutContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="border border-solid border-black p-8 dark:border-yellow">
            <h3 className="text-3xl mb-4">Misión</h3>
            {missionContent}
          </div>
        </div>
      </div>
    </div>
  );
}
