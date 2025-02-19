// app/page.tsx
'use client';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import Avatar3D from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Nav />
      <Avatar3D />
      <Education />
      <Skills />
      <Projects />
      
      <Footer />
    </main>
  );
}