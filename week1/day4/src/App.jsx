import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Contact from "./components/Contact.jsx";
import UserFavoriteAnimals from "./components/UserFavoriteAnimals.jsx";
import Exercise from "./components/Exercise3.jsx";
import CelebrityCard from "./components/CelebrityCard.jsx";

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

const celebrities = [
  {
    title: "Bob Dylan",
    imageUrl: "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
    description: "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
  },
  {
    title: "Paul McCartney",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
    description: "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
  },
];

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];
const features = [
  { icon: "🚀", title: "Fast performance", description: "Get your work done with a quick and simple setup." },
  { icon: "⚡", title: "Easy to use", description: "Clear tools help you get started without a fuss." },
  { icon: "📱", title: "Modern design", description: "A clean layout that works on all your screens." },
];

export default function App() {
  const sum = 5 + 5;

  return (
    <>
      <Header />
      <main id="home" className="mx-auto max-w-6xl space-y-14 px-6 py-10">
        <section className="rounded-2xl bg-blue-50 px-6 py-14 text-center md:px-16">
          <p className="mb-3 font-semibold text-blue-700">A little more room to grow</p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Make your day brighter</h1>
          <p className="mx-auto mb-6 max-w-xl text-slate-600">Simple tools and a friendly place to make your next idea happen.</p>
          <a className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white" href="#features">See what we do</a>
        </section>

        <section id="features" className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => <Card key={feature.title} {...feature} />)}
        </section>

        <Contact />

        <section className="space-y-5 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold">Exercises XP</h2>
          <div className="rounded-xl bg-white p-5 shadow">
            <p>Hello World!</p>
            <h1>I Love JSX!</h1>
            <p>React is {sum} times better with JSX</p>
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <UserFavoriteAnimals favAnimals={user.favAnimals} />
          </div>
          <Exercise />
        </section>

        <section className="space-y-5 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold">Exercise XP Gold</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {celebrities.map((celebrity) => <CelebrityCard key={celebrity.title} {...celebrity} />)}
          </div>
          <ul className="mx-auto mt-6 max-w-md">
            {planets.map((planet) => <li className="mb-2 rounded border bg-gray-100 p-3" key={planet}>{planet}</li>)}
          </ul>
        </section>
      </main>
    </>
  );
}
