"use client";
import { useState, useEffect } from "react";

export default function Timeline() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/timeline-events`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          const formattedEvents = data.data.map((event) => ({
            id: event.id,
            title: event.attributes.title,
            date: event.attributes.date,
            description: event.attributes.description
              .map((desc) => desc.children.map((child) => child.text).join(" "))
              .join("\n"),
          }));
          setEvents(formattedEvents);
        } else {
          setError("Failed to fetch events");
        }
      } catch (error) {
        setError("Error fetching events");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!events || events.length === 0) {
    return <p>No hay eventos para mostrar.</p>;
  }

  return (
    <section>
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0">
              <h3 className="text-3xl font-semibold">Creatyum</h3>
              <span className="text-sm font-bold tracking-wider uppercase">
                en el tiempo...
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-black before:dark:bg-yellow sm:col-span-8 sm:space-y-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-black before:dark:bg-yellow"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {event.title}
                  </h3>
                  <time className="text-xs tracking-wide uppercase">
                    {new Date(event.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                    })}
                  </time>
                  <p className="mt-3">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
