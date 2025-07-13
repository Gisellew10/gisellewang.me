import styles from './about.module.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar'; // make sure this path is correct for your structure

export default function AboutPage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main className={styles.container}>
        <section className={styles.left}>
          <h1 className={styles.heading}>Hi, I’m Giselle Wang 👋</h1>
          <p className={styles.paragraph}>
           I’m a software developer based in Toronto with 1.5 years of hands-on industry experience in full-stack development and test automation. I graduated from the University of Toronto with an Honours Bachelor of Science, double majoring in Computer Science and Statistics.
          </p>
          <p className={styles.paragraph}>
            From test automation at Softchoice to building web scraping tools at Caseware, I’ve loved solving real-world problems through code. My toolbelt includes React, Node.js, PostgreSQL, Selenium, Docker, and a sprinkle of AI using Google Gemini.
          </p>
          <p className={styles.paragraph}>
            I’m passionate about clean design, intuitive UX, and turning big ideas into scalable solutions. My recent projects — like SpendSmart and HYPE — are where I explore full-stack development, intelligent design, and real-world impact.
          </p>
          <p className={styles.paragraph}>
            Whether I’m coding, sketching in Figma, or collaborating with a team, I’m always looking to learn and grow. Thanks for stopping by — let’s build something great together!
          </p>

          <div className={styles.icons}>
            <a href="https://www.linkedin.com/in/gisellewang/" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Gisellew10" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.png" alt="GitHub" />
            </a>
          </div>
        </section>

        <aside className={styles.right}>
          <img src="/images/profile.jpg" alt="Portrait" className={styles.profileImage} />
          <button className={styles.chatButton}>Let's Chat!</button>
        </aside>
      </main>
    </>
  );
}