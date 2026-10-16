export default function CelebrityCard({ title, imageUrl, description, buttonLabel, buttonUrl }) {
  return (
    <article className="max-w-md overflow-hidden rounded-xl bg-white shadow">
      <img className="h-52 w-full object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <a className="inline-block rounded bg-blue-500 px-4 py-2 text-white" href={buttonUrl} target="_blank" rel="noreferrer">
          {buttonLabel}
        </a>
      </div>
    </article>
  );
}
