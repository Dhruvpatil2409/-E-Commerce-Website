import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Categories } from './pages/Categories';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AddYourProduct } from "./pages/addYourProduct";
import { Route, Routes } from 'react-router-dom'; //[cite: 2]

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C1A17] selection:bg-[#EAE6DF] selection:text-[#1C1A17] flex flex-col antialiased">
      {/* Structural architecture remains intact[cite: 2] */}
      <Navbar />

      <main className="flex-grow pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addYourProduct" element={<AddYourProduct />} />
        </Routes>
      </main>

      <footer className="border-t border-[#EAE6DF] py-8 text-center text-xs tracking-widest uppercase text-[#8C857B]">
        © {new Date().getFullYear()} Runewood Studio. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;