import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Collection', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#EAE6DF]/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand identity utilizing the elegant serif font */}
        <Link to="/" className="text-2xl tracking-tight text-[#1C1A17] font-[family:var(--font-serif)] font-semibold italic">
          R.
        </Link>

        {/* Navigation items[cite: 2] */}
        <div className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.2em] font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`relative py-2 transition-colors duration-300 hover:text-[#1C1A17] ${
                  isActive ? 'text-[#1C1A17]' : 'text-[#8C857B]'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1C1A17] animate-fade-in" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button[cite: 2] */}
        <div>
          <Link 
            to="/addYourProduct" 
            className="text-xs uppercase tracking-[0.15em] px-5 py-2.5 border border-[#1C1A17] bg-[#1C1A17] text-white hover:bg-transparent hover:text-[#1C1A17] transition-all duration-300 rounded-none font-medium"
          >
            Submit Listing
          </Link>
        </div>

      </div>
    </nav>
  );
}