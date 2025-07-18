const Header = ({ name }) => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-500">{name}</h1>
      <nav className="space-x-6 text-sm font-medium">
        <a href="#services" className="hover:text-pink-500">
          Services
        </a>
        <a href="#about" className="hover:text-pink-500">
          About
        </a>
        <a href="#contact" className="hover:text-pink-500">
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
