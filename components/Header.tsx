import { Code2, Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-blue-600" />
            <span className="text-slate-900">Portfolio</span>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
