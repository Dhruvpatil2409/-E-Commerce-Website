import React from 'react';

export default function ProductCard({ img, name, price }) {
  const styles = {
    card: { textAlign: 'left', cursor: 'pointer' },
    imgContainer: { height: '400px', overflow: 'hidden', marginBottom: '15px', backgroundColor: '#f9f9f9' },
    img: { width: '100%', height: '100%', objectFit: 'cover' },
    name: { fontSize: '16px', fontWeight: '500', color: '#1a1a1a', marginBottom: '5px' },
    price: { fontSize: '14px', color: '#707070' }
  };

  return (
    <div style={styles.card}>
      <div style={styles.imgContainer}>
        <img src={img} alt={name} style={styles.img} />
      </div>
      <h4 style={styles.name}>{name}</h4>
      <p style={styles.price}>{price}</p>
    </div>
  );
}