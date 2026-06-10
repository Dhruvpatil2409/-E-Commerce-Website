import React from 'react';

export default function Categories() {
  const categories = [
    { name: 'Womenswear', img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600' },
    { name: 'Menswear', img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600' },
    { name: 'Accessories', img: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=600' }
  ];

  const styles = {
    section: { padding: '80px 5%', textAlign: 'center' },
    title: { fontSize: '28px', marginBottom: '40px', letterSpacing: '1px', fontWeight: '400' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
    card: { position: 'relative', height: '400px', overflow: 'hidden', cursor: 'pointer' },
    img: { width: '100%', height: '100%', objectFit: 'cover' },
    overlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    name: { color: '#fff', fontSize: '22px', letterSpacing: '2px', fontWeight: '500' }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Shop by Category</h2>
      <div style={styles.grid}>
        {categories.map((cat, i) => (
          <div key={i} style={styles.card}>
            <img src={cat.img} alt={cat.name} style={styles.img} />
            <div style={styles.overlay}>
              <h3 style={styles.name}>{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}