import "./Exercise.css";

const styleHeader = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

export default function Exercise() {
  return (
    <section className="rounded-xl bg-white p-5 shadow">
      <h1 style={styleHeader}>Styled Header</h1>
      <p className="para">This paragraph uses a CSS class in React.</p>
      <a href="https://react.dev" target="_blank" rel="noreferrer">Visit React</a>
      <form className="my-4 flex gap-2" onSubmit={(event) => event.preventDefault()}>
        <input className="rounded border p-2" aria-label="Your name" placeholder="Your name" />
        <button className="rounded bg-blue-600 px-3 text-white" type="submit">Say hello</button>
      </form>
      <img className="mb-4 h-32 rounded object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600" alt="Sunny landscape" />
      <ul className="list-inside list-disc"><li>Learn JSX</li><li>Build components</li></ul>
    </section>
  );
}
