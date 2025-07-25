'use client';

import { useEffect, useState } from 'react';
import styles from './work.module.css';
import Navbar from '@/components/Navbar';

interface WorkExperience {
  id: number;
  company: string;
  role: string;
  duration: string;
  skills: string;
  description: string;
  icon: string;
}

export default function WorkPage() {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true); // 🧸 loading state

  useEffect(() => {
    fetch('/api/work')
      .then((res) => res.json())
      .then((data) => {
        setWorkExperiences(data);
        setLoading(false); // ✅ stop loading when data arrives
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.heading}>
          My <span className={styles.highlight}>Work Experience</span>
        </h1>

        {loading ? (
          <div className={styles.loaderWrapper}>
            <img
              src="/images/cute-loader.png"
              alt="Loading..."
              className={styles.loader}
            />
          </div>
        ) : (
          <div className={styles.grid}>
            {workExperiences.map((work) => (
              <div key={work.id} className={styles.card}>
                <img
                  src={`/images/${work.icon}`}
                  alt={work.company}
                  className={styles.image}
                />
                <h2 className={styles.company}>{work.company}</h2>
                <h3 className={styles.role}>{work.role}</h3>
                <p className={styles.duration}>{work.duration}</p>
                <p className={styles.skills}><strong>Skills:</strong> {work.skills}</p>
                <ul className={styles.description}>
                  {work.description.split('. ').map((sentence, index) =>
                    sentence.trim() !== '' ? (
                      <li key={index}>
                        {sentence.trim().endsWith('.') ? sentence.trim() : sentence.trim() + '.'}
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}