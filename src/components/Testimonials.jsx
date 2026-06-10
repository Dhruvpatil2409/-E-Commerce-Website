import React from 'react';

export default function Testimonials() {
  const styles = {
    section: {
      backgroundColor: '#f9f6f0',
      padding: '80px 5%',
      textAlign: 'center'
    },
    quote: {
      fontSize: '20px',
      fontStyle: 'italic',
      maxWidth: '800px',
      margin: '0 auto 20px auto',
      color: '#333',
      lineHeight: '1.6'
    },
    author: {
      fontSize: '12px',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#707070'
    }
  };

  return (
    <section style={styles.section}>
      <p style={styles.quote}>
        "The quality of the linen blazer I ordered exceeded my expectations. Beautifully tailored and timeless appeal."
      </p>
      <p style={styles.author}>— Sarah K., London</p>
    </section>
  );
}