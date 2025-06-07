'use client';

import styles from '../styles/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Giselle Wang</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#contact" className={styles.contact}>Contact</a></li>
      </ul>
    </nav>
  );
}