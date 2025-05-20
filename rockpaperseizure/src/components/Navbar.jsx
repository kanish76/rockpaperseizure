// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full flex justify-between items-center px-6 py-4 bg-primary text-white">
      <div className="text-2xl font-glitch">rockpaperseizure</div>
      <ul className="hidden md:flex gap-6 uppercase text-sm">
        <li className="hover:text-accent cursor-pointer">Work</li>
        <li className="hover:text-accent cursor-pointer">Experiments</li>
        <li className="hover:text-accent cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

