import React from 'react';

export default function Hero() {
  const styles = {
    hero: { height: '80vh', background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070") center/cover no-repeat', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center', padding: '0 20px' },
    subtitle: { fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' },
    title: { fontSize: '56px', fontWeight: '300', marginBottom: '25px', letterSpacing: '2px' },
    btn: { padding: '15px 40px', backgroundColor: '#fff', color: '#1a1a1a', border: 'none', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', cursor: 'pointer', textTransform: 'uppercase' }
  };

  return (
    <section style={styles.hero}>
      <p style={styles.subtitle}>New Collection 2026</p>
      <h1 style={styles.title}>Define Your Elegance</h1>
      <button style={styles.btn}>Explore Shop</button>
    </section>
  );
}