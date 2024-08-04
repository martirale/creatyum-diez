"use client";
import { useState, useEffect } from "react";
import { FormatContent } from "@/components/FormatContent";

export default function Terms() {
  const [termsContent, setTermsContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const resTerms = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/terms-of-use`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );

        if (resTerms.ok) {
          const dataTerms = await resTerms.json();

          const formattedTerms = FormatContent(dataTerms.data.attributes.terms);

          setTermsContent(formattedTerms);
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
      <h1>Términos y condiciones</h1>

      <div className="grid grid-cols-12 gap-4 md:gap-12">
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-extrabold text-5xl pb-16 md:text-6xl">
            Términos y condiciones
          </h2>
          {termsContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
