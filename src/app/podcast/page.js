import PodcastPlayer from "@/components/PodcastPlayer";

export const metadata = {
  title: "Café Creativo Podcast — Creatyum Media",
  description: "Revista digital para diseñadores y creativos en Latam.",
};

export default function Podcast() {
  return (
    <div>
      <h1>Café Creativo Podcast</h1>

      <PodcastPlayer />
    </div>
  );
}
