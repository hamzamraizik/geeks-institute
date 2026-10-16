export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a className="text-xl font-bold text-blue-700" href="#home">Bright Day</a>
        <div className="flex gap-5 text-sm font-medium">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
