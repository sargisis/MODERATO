import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Course } from '@/components/sections/Course';
import { Schedule } from '@/components/sections/Schedule';
import { Chefs } from '@/components/sections/Chefs';
import { Footer } from '@/components/layout/Footer';
import { LeadMagnet } from '@/components/sections/LeadManget';

export default function App() {
  return (
    <div className="min-h-screen bg-primary-bg text-white selection:bg-brand-gold selection:text-primary-bg">
      <Header />
      <main>
        <Hero />
        <Course />
        <Schedule />
        <Chefs />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
}
