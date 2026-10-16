export default function Card({ icon, title, description }) {
  return (
    <article className="rounded-xl bg-white p-6 text-center shadow">
      <div className="mb-3 text-4xl" aria-hidden="true">{icon}</div>
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="text-slate-600">{description}</p>
    </article>
  );
}
