import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSpaceScroll = (
  setActiveSection: (section: string) => void
) => {
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(section),
        onEnterBack: () => setActiveSection(section),
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [setActiveSection]);
};
