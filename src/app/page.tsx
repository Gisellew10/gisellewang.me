import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Hi, I&apos;m Giselle!</h1>
          <h2>A Software Developer</h2>
        </div>

        <div className={styles.illustration}>
          <img
            src="/images/home.png"
            alt="Home"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.circle}>
          <span>1.5</span>
          <small>Years of<br />Work Experience</small>
        </div>
      </section>
    </main>
  );
}