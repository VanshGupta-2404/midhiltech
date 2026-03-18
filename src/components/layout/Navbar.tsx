import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '../ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b-0 h-20 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-600 to-accent-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            M
          </div>
          <span className="text-xl font-bold text-foreground">Midhil<span className="text-brand-600 dark:text-brand-400">Tech</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-medium text-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="px-5 py-2.5 rounded-full bg-foreground text-background font-medium hover:bg-brand-600 hover:text-white transition-all shadow-md hover:shadow-lg dark:hover:shadow-brand-500/20">
              Get Started
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 glass-card border-t border-border p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between mx-4 mt-2">
            <ThemeToggle />
            <button className="px-5 py-2.5 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-all">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
