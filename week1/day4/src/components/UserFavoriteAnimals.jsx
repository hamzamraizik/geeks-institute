export default function UserFavoriteAnimals({ favAnimals }) {
  return (
    <div>
      <h3 className="mb-2 font-bold">Favorite animals</h3>
      <ul className="list-inside list-disc">
        {favAnimals.map((animal) => <li key={animal}>{animal}</li>)}
      </ul>
    </div>
  );
}
