import React from 'react';

export default function Navbar() {
  const styles = {
    navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', backgroundColor: '#fff', borderBottom: '1px solid #eaeaea', position: 'sticky', top: 0, zIndex: 100 },
    logo: { fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer' },
    links: { display: 'flex', gap: '30px', listStyle: 'none' },
    link: { textDecoration: 'none', color: '#1a1a1a', fontWeight: '500', fontSize: '14px', letterSpacing: '1px' },
    cartIcons: { display: 'flex', gap: '20px', fontSize: '18px', cursor: 'pointer' }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>VÉLOURE</div>
      <ul style={styles.links}>
        <li><a href="#" style={styles.link}>Home</a></li>
        <li><a href="#" style={styles.link}>Shop</a></li>
        <li><a href="#" style={styles.link}>Our Story</a></li>
        <li><a href="#" style={styles.link}>Contact</a></li>
      </ul>
      <div style={styles.cartIcons}>
        <span>🔍</span>
        <span>👤</span>
        <span>🛒 (0)</span>
      </div>
    </nav>
  );
}