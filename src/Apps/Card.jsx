import Markdown from "../components/Markdown";

export default function AppCard({ data }) {
  const image = data.image;

  return (
    <div className="AppCard w-full md:w-6/12">
      <a href={data.url} className="block text-black">
        <div className="hover:shadow-md border border-gray-100 m-4">
          {image ? (
            <img
              src={`/images/${image.filename}.${image.extension}`}
              alt={image.alt}
              className="aspect-ration-16/9"
            />
          ) : null}
          <div className="p-8">
            <h1 className="text-xl">{data.title}</h1>
            <Markdown data={{ html: data.description }}></Markdown>
          </div>
        </div>
      </a>
    </div>
  );
}
