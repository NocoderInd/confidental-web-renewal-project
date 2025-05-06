
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-confidental-blue">Confidental</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#services" className="text-confidental-text-dark hover:text-confidental-blue font-medium transition-colors">
            Services
          </a>
          <a href="#about" className="text-confidental-text-dark hover:text-confidental-blue font-medium transition-colors">
            About Us
          </a>
          <a href="#team" className="text-confidental-text-dark hover:text-confidental-blue font-medium transition-colors">
            Our Team
          </a>
          <a href="#contact" className="text-confidental-text-dark hover:text-confidental-blue font-medium transition-colors">
            Contact
          </a>
          <Button className="btn-primary">Book Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-confidental-text-dark p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed top-[60px] left-0 right-0 bg-white shadow-md p-5 lg:hidden animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a 
                href="#services" 
                className="text-confidental-text-dark hover:text-confidental-blue font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-confidental-text-dark hover:text-confidental-blue font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#team" 
                className="text-confidental-text-dark hover:text-confidental-blue font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Team
              </a>
              <a 
                href="#contact" 
                className="text-confidental-text-dark hover:text-confidental-blue font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="btn-primary mt-2">Book Now</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
