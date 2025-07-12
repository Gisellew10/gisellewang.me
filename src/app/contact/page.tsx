// app/contact/page.tsx
'use client';

import styles from './contact.module.css';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.message}>This page is still under construction. Please check back soon!</p>
      </div>
    </div>
  );
}