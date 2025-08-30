import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-primary z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
};

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: '🏠', name: 'Home' },
    { id: 'about', label: '👨‍💻', name: 'About' },
    { id: 'skills', label: '⚡', name: 'Skills' },
    { id: 'experience', label: '💼', name: 'Experience' },
    { id: 'education', label: '🎓', name: 'Education' },
    { id: 'projects', label: '🚀', name: 'Projects' },
    { id: 'games', label: '🎮', name: 'Games' },
    { id: 'contact', label: '📧', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      const currentSection = sectionElements.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 bg-surface/80 backdrop-blur-lg rounded-full p-3 border border-border shadow-xl">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            size="sm"
            className={`relative rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-primary text-primary-foreground shadow-primary'
                : 'hover:bg-surface-elevated'
            }`}
            onClick={() => scrollToSection(section.id)}
            title={section.name}
          >
            <span className="text-lg">{section.label}</span>
            {activeSection === section.id && (
              <motion.div
                className="absolute inset-0 bg-primary rounded-full -z-10"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Button>
        ))}
      </div>
    </motion.nav>
  );
};

export { ScrollProgressBar, FloatingNav };