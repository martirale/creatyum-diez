"use client";
import { useState, useEffect } from "react";
import { FormatContent } from "@/components/FormatContent";

export default function Privacy() {
  const [privacyContent, setPrivacyContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resPrivacy = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/privacy`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );

        if (resPrivacy.ok) {
          const dataPrivacy = await resPrivacy.json();

          const formattedPrivacy = FormatContent(
            dataPrivacy.data.attributes.privacy
          );

          setPrivacyContent(formattedPrivacy);
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
      <h1>Política de privacidad</h1>

      <div className="grid grid-cols-12 gap-4 md:gap-12">
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-extrabold text-5xl pb-16 md:text-6xl">
            Política de privacidad
          </h2>
          {privacyContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
