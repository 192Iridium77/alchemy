export default function AppCard({ data }) {
  const image = data.image;

  return (
    <div className="AppCard w-full md:w-3/12">
      <a href={data.url} className="block text-black">
        <div className="hover:shadow-md border border-gray-100 m-4">
          {image ? (
            <img
              src={`/images/${image.filename}.${image.extension}`}
              alt={image.alt}
              className="aspect-ration-16/9"
            />
          ) : null}
          <div className="p-8" style={{ minHeight: "140px" }}>
            {data.description}
          </div>
        </div>
      </a>
    </div>
  );
}
