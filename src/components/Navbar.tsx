
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-[#FF1F6D] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full translate-x-0.5"></div>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 italic">perfect</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium text-sm">
            <button className="flex items-center gap-1 hover:text-[#FF1F6D] transition-colors">Solutions <ChevronDown size={14} /></button>
            <button className="flex items-center gap-1 hover:text-[#FF1F6D] transition-colors">Perfect For <ChevronDown size={14} /></button>
            <button className="flex items-center gap-1 hover:text-[#FF1F6D] transition-colors">Resources <ChevronDown size={14} /></button>
            <button className="hover:text-[#FF1F6D] transition-colors">Pricing</button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => navigate("/login")} className="text-slate-600 font-medium px-4 py-2">Login</button>
          <button className="bg-[#FF1F6D] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#e01a5e] transition-all shadow-lg shadow-pink-200">Book a Demo</button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b absolute top-full left-0 right-0 p-4 space-y-4">
          <button className="block w-full text-left py-2 font-medium">Solutions</button>
          <button className="block w-full text-left py-2 font-medium">Perfect For</button>
          <button className="block w-full text-left py-2 font-medium">Resources</button>
          <button className="block w-full text-left py-2 font-medium">Pricing</button>
          <div className="pt-4 border-t flex flex-col gap-3">
             <button onClick={() => navigate("/login")} className="w-full py-2 font-bold text-center">ogin</button>
            <button className="w-full bg-[#FF1F6D] text-white py-3 rounded-full font-bold">Book a Demo</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
