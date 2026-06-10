import React from 'react';
import Hero from '../components/Hero.jsx';
import Categories from '../components/Categories.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Testimonials from '../components/Testimonials.jsx';

export default function Home() {
  const featuredProducts = [
    { name: 'Tailored Linen Blazer', price: '$245.00', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600' },
    { name: 'Classic Silk Slip Dress', price: '$180.00', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600' },
    { name: 'Minimalist Leather Tote', price: '$310.00', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600' },
    { name: 'Ribbed Knit Sweater', price: '$135.00', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600' }
  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    padding: '0 5% 80px 5%'
  };

  return (
    <div>
      <Hero />
      <Categories />
      <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '40px', letterSpacing: '1px', fontWeight: '400' }}>Curated Essentials</h2>
      <div style={gridStyle}>
        {featuredProducts.map((prod, index) => (
          <ProductCard key={index} img={prod.img} name={prod.name} price={prod.price} />
        ))}
      </div>
      <Testimonials />
    </div>
  );
}