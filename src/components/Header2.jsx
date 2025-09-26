import { useState } from "react";

function Header2() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">MyLanding</h1>
      <nav className="hidden md:flex gap-6">
        <a href="#hero" className="hover:text-blue-600">Home</a>
        <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
      <button 
        onClick={() => setOpen(!open)} 
        className="md:hidden text-xl"
      >
        ☰
      </button>
      {open && (
        <div className="absolute top-14 right-4 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4">
          <a href="#hero">Home</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header2;
