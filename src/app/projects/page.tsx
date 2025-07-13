'use client';

import styles from './projects.module.css';
import ProjectCard from './ProjectCard';
import Navbar from '@/components/Navbar';

const projects = [
  {
    id: 1,
    title: 'SpendSmart: AI-Powered Personal Finance Platform',
    description:
        'SpendSmart is a full-featured finance management platform built with React, Node.js, and MongoDB. It allows users to log expenses and income, categorize transactions, and visualize spending with intuitive donut charts. Integrated OCR enables image and PDF scanning of bank statements, while Google Gemini AI provides personalized financial insights. Features include customizable budgeting tools, goal tracking with reports, Google OAuth login, and real-time email alerts. Designed in Figma and optimized for mobile, SpendSmart helps users take full control of their finances with a secure and seamless experience.',
    tags: [
        'React',
        'Node.js',
        'MongoDB',
        'Google Gemini AI',
        'OCR',
        'OAuth 2.0',
        'Responsive Design',
    ],
        image: '/images/spendsmart.png',
        link: 'https://github.com/Gisellew10/SpendSmart',
    },
  {
    id: 2,
    title: 'HYPE: Student–Startup Matchmaking Platform',
    description:
      'A web platform that connects students with startups based on shared skills and goals. I led frontend development using React and Figma, and contributed to backend development with Node.js and MongoDB. The platform also supports video resumes and startup-hosted competitions to encourage collaboration and engagement.',
    tags: ['React', 'Node.js', 'MongoDB', 'Figma', 'Full Stack', 'Collaboration Tools'],
    image: '/images/hype.png',
    link: 'https://github.com/Gisellew10/HYPE',
  },
  {
    id: 3,
    title: 'UT Fresh: Android Grocery App for Students',
    description:
      'An Instacart-style Android app designed to help students access affordable groceries on campus. Built using Java, Firebase, and Android Studio, the app supports item search, cart management, and real-time inventory. Developed in a Scrum team environment and rigorously tested with JUnit to ensure quality before deployment.',
    tags: ['Java', 'Android Studio', 'Firebase', 'JUnit Testing', 'Agile Development'],
    image: '/images/utfresh.png',
    link: 'https://github.com/Gisellew10/UT-Fresh',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <h1 className={styles.heading}>
          Pixels with Purpose: <span>Turning Ideas into Impactful Interfaces</span>
        </h1>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </main>
    </>
  );
}