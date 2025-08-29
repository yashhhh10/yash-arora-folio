import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const Projects = () => {
  const projects = [
    {
      title: 'Corporate Intranet Portal',
      description: 'A comprehensive digital platform that centralizes company communication, providing real-time updates on company news, events, and policies. Built with the MERN stack and featuring secure authentication.',
      longDescription: [
        'Provided a digital and centralized communication platform, which offered real time updates on company news, events and policies',
        'Implemented JWT-based authentication and role-based access control, with encrypted onboarding routes for admins',
        'Integrated real-time notifications and document management system',
        'Optimized performance with lazy loading and caching strategies'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt', 'Postman'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'Completed'
    },
    {
      title: 'Expenseless - Personal Finance Platform',
      description: 'A feature-rich personal finance management software that enables users to track expenses, manage debts, and plan budgets with real-time bank synchronization.',
      longDescription: [
        'Designed and developed a feature-rich personal finance management software',
        'Enabled users to track expenses, manage debts, and plan budgets with real-time bank synchronization',
        'Implemented data visualization with charts and graphs for expense analysis',
        'Built responsive UI/UX design for seamless user experience across devices'
      ],
      technologies: ['React', 'MongoDB', 'UI/UX Design', 'Chart.js', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'Completed'
    }
  ];

  const otherProjects = [
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
      githubLink: '#'
    },
    {
      title: 'E-commerce API',
      description: 'RESTful API for e-commerce platform with payment integration and inventory management.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Stripe'],
      githubLink: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts and data visualization.',
      technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS'],
      githubLink: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                A collection of projects that showcase my skills in full-stack development, 
                problem-solving, and creating user-centered solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          </AnimatedSection>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.title} 
                animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
                delay={index * 200}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-elevation"
                    />
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {project.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground-secondary mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.longDescription.map((feature, idx) => (
                          <li key={idx} className="text-foreground-secondary flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button className="gap-2" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <Eye size={18} />
                          View Project
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github size={18} />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Other Projects</h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto">
                Additional projects and experiments that demonstrate various technologies and concepts
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <AnimatedSection key={project.title} animation="scale-in" delay={index * 150}>
                <Card className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 group hover:shadow-elevation h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground-secondary mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-primary/20 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="gap-2 w-full" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://github.com/yashrajarora" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  View All Projects on GitHub
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;
