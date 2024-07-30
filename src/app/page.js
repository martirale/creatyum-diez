import Timeline from "../components/Timeline.js";

export const metadata = {
  title: "Creatyum Media",
  description: "Revista digital para diseñadores y creativos en Latam.",
};

export default function Home() {
  return (
    <div>
      <h1>Creatyum Media</h1>

      <Timeline />
    </div>
  );
}
