import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/La maison de luxe.jpeg" alt="Luxurys Logo" className="h-16" />
        </Link>
        
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 p-4 md:p-0 shadow-lg md:shadow-none`}>
          <Link to="/" className="text-gray-800 hover:text-gold-600 transition">Accueil</Link>
          <Link to="/services" className="text-gray-800 hover:text-gold-600 transition">Services</Link>
          <Link to="/projets" className="text-gray-800 hover:text-gold-600 transition">Projets</Link>
          <Link to="/about" className="text-gray-800 hover:text-gold-600 transition">À Propos</Link>
          <Link to="/contact" className="text-gray-800 hover:text-gold-600 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}