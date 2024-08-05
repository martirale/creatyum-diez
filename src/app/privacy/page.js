import PageContent from "./PageContent";

export const metadata = {
  title: "Política de privacidad - Creatyum Archive",
  description: "Revista digital para diseñadores y creativos en Latam.",
};

export default function Podcast() {
  return (
    <div className="container mx-auto px-8 py-8 md:px-0">
      <h1>Política de privacidad</h1>

      <div className="grid grid-cols-12 gap-4 md:gap-12">
        <div className="col-span-12 md:col-span-8">
          <PageContent />
        </div>
      </div>
    </div>
  );
}
