import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';

const Home = () => {
  const skills = [
    'React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS'
  ];

  const featuredProjects = [
    {
      title: 'Corporate Intranet Portal',
      description: 'MERN Stack platform with JWT authentication and role-based access control',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      link: '/projects'
    },
    {
      title: 'Expenseless Finance Platform',
      description: 'Personal finance management with real-time bank synchronization',
      technologies: ['React', 'MongoDB', 'UI/UX'],
      link: '/projects'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection animation="fade-in-up">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Yash Raj Arora
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground-secondary mb-2">
                Full-Stack Developer
              </p>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Passionate about solving real-world problems, building intuitive web applications, 
                and crafting efficient algorithmic solutions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-surface rounded-full text-sm font-medium text-foreground-secondary border border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/projects">
                <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90">
                  View My Work
                  <ExternalLink size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-2">
                  Get In Touch
                  <Mail size={18} />
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection animation="fade-in-up" delay={600}>
            <div className="flex justify-center gap-6 mb-16">
              <a
                href="https://github.com/yashrajarora"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface hover:bg-surface-elevated rounded-full transition-all duration-300 hover:scale-110 hover:shadow-primary"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yashrajarora04070500/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface hover:bg-surface-elevated rounded-full transition-all duration-300 hover:scale-110 hover:shadow-accent"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:yashrajarora79@gmail.com"
                className="p-3 bg-surface hover:bg-surface-elevated rounded-full transition-all duration-300 hover:scale-110 hover:shadow-primary"
              >
                <Mail size={24} />
              </a>
            </div>
          </AnimatedSection>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <ArrowDown size={24} className="text-foreground-muted animate-pulse-glow" />
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and experience
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.title} animation="scale-in" delay={index * 200}>
                <Card className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 group hover:shadow-elevation">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground-secondary mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;