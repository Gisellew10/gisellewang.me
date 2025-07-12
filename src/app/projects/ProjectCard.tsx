'use client';

import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <a href={link} className={styles.link}>
          <span className={styles.arrow}>➝</span> view detail
        </a>
      </div>
    </div>
  );
}