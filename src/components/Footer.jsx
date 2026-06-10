import React from 'react';

export default function Footer() {
  const styles = {
    footer: { backgroundColor: '#1a1a1a', color: '#fff', padding: '60px 5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' },
    col: { flex: '1 1 200px' },
    title: { fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', color: '#d4af37' },
    list: { listStyle: 'none', padding: 0, margin: 0 },
    item: { marginBottom: '10px', fontSize: '14px', color: '#ccc', cursor: 'pointer' },
    inputContainer: { display: 'flex', marginTop: '15px' },
    input: { padding: '10px', border: 'none', width: '70%', fontSize: '14px' },
    btn: { padding: '10px 15px', backgroundColor: '#d4af37', border: 'none', cursor: 'pointer', color: '#1a1a1a', fontWeight: 'bold' }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.col}>
        <h3 style={{...styles.title, color: '#fff', fontSize: '20px'}}>VÉLOURE</h3>
        <p style={{color: '#ccc', fontSize: '14px', lineHeight: '1.6'}}>High-end wardrobe essentials designed for modern living.</p>
      </div>
      <div style={styles.col}>
        <h4 style={styles.title}>Customer Care</h4>
        <ul style={styles.list}>
          <li style={styles.item}>Shipping & Returns</li>
          <li style={styles.item}>Size Guide</li>
          <li style={styles.item}>Track Order</li>
        </ul>
      </div>
      <div style={styles.col}>
        <h4 style={styles.title}>Newsletter</h4>
        <div style={styles.inputContainer}>
          <input type="email" placeholder="Your email" style={styles.input} />
          <button style={styles.btn}>➔</button>
        </div>
      </div>
    </footer>
  );
}