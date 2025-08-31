
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Eye,
  Send,
  Phone,
  MapPin,
  ArrowDown,
  Code,
  Zap,
  Rocket
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import InteractiveBackground from '@/components/InteractiveBackground';
import InteractiveGames from '@/components/InteractiveGames';
import { ScrollProgressBar, FloatingNav } from '@/components/ScrollNavigation';
import { RevealText, SplitText, TypewriterText, ScrollScale, ParallaxText } from '@/components/ScrollAnimations';

const InteractivePortfolio = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const skills = {
    'Frontend': [
      { name: 'React/TypeScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 90 }
    ],
    'Backend': [
      { name: 'Node.js/Express', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT/OAuth', level: 80 },
      { name: 'Postman', level: 85 }
    ],
    'Database': [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 }
    ],
    'Tools': [
      { name: 'Git', level: 85 },
      { name: 'AWS', level: 70 },
      { name: 'Machine Learning', level: 65 },
      { name: 'Tableau', level: 70 }
    ]
  };

  const projects = [
    {
      title: 'Corporate Intranet Portal',
      description: 'A comprehensive MERN stack platform with JWT authentication and role-based access control.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'bcrypt'],
      features: [
        'Real-time company updates and notifications',
        'Secure JWT-based authentication',
        'Role-based access control for admins',
        'Document management system'
      ]
    },
    {
      title: 'Expenseless Finance Platform',
      description: 'Personal finance management software with real-time bank synchronization and expense tracking.',
      technologies: ['React', 'MongoDB', 'Chart.js', 'UI/UX'],
      features: [
        'Real-time bank account synchronization',
        'Interactive expense tracking and budgeting',
        'Data visualization with charts',
        'Debt management and planning tools'
      ]
    },
    {
      title: 'HospEASE (AI-Powered Hospital ChatBot)',
      description: 'Multilingual AI chatbot using NLP (RAG) to automate patient inquiries and reduce staff workload.',
      technologies: ['RAG', 'NLP', 'PyTorch', 'LAMA AI', 'ChromaDB', 'Flask'],
      features: [
        'Multilingual support (English and Hindi)',
        'Automated OPD/OT scheduling and FAQs',
        'Real-time navigation via Google Maps API',
        'Intuitive UI design for patient guidance'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <InteractiveBackground />
      <ScrollProgressBar />
      <FloatingNav />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
              className="w-32 h-32 mb-8 rounded-full bg-gradient-primary p-1"
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Code size={48} className="text-primary" />
              </div>
            </motion.div>

            <div className="text-left max-w-6xl">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-accent text-lg md:text-xl mb-2"
              >
                Hi, my name is
              </motion.p>
              <SplitText 
                text="Yash Raj Arora."
                className="text-5xl md:text-7xl font-bold mb-4 text-left"
              />
              <SplitText 
                text="I build web solutions"
                className="text-4xl md:text-6xl font-bold mb-8 text-foreground-secondary text-left"
              />
            </div>

            <TypewriterText
              text="Full-Stack Developer & Problem Solver"
              className="text-xl md:text-2xl text-foreground-secondary mb-6"
              speed={80}
            />

            <RevealText delay={2}>
              <p className="text-lg text-foreground-muted max-w-3xl text-left mb-8">
                I'm a passionate developer specializing in creating intelligent, full-stack AI solutions that solve real-world problems.
              </p>
            </RevealText>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-start max-w-6xl mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90 group">
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="gap-2 group">
                <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-start gap-6 max-w-6xl"
          >
            {[
              { icon: Github, href: 'https://github.com/yashrajarora', color: 'hover:text-primary' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/yashrajarora04070500/', color: 'hover:text-accent' },
              { icon: Mail, href: 'mailto:yashrajarora79@gmail.com', color: 'hover:text-primary' }
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-surface hover:bg-surface-elevated rounded-full transition-all duration-300 ${color} group`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + index * 0.1 }}
              >
                <Icon size={24} className="group-hover:animate-pulse" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} className="text-foreground-muted animate-pulse" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <ParallaxText speed={0.3}>
            <RevealText>
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
              </h2>
            </RevealText>
          </ParallaxText>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealText delay={0.3}>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Zap size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
                    <p className="text-foreground-secondary">MERN Stack Specialist</p>
                  </div>
                </motion.div>

                <p className="text-foreground-secondary leading-relaxed">
                  My journey in software development began with curiosity about how technology can solve complex problems. 
                  I've developed expertise in building scalable web applications with modern technologies.
                </p>

                <p className="text-foreground-secondary leading-relaxed">
                  With hands-on experience in the MERN stack, I've created everything from corporate platforms to 
                  personal finance tools. I believe in writing clean, maintainable code that follows industry best practices.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Git'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="outline" className="border-primary/20 text-primary px-4 py-2">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealText>

            <ScrollScale>
              <Card className="p-8 bg-card border-card-border">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Rocket size={24} className="text-primary" />
                  Professional Stats
                </h3>
                <div className="space-y-6">
                  {[
                    { label: 'Projects Completed', value: '15+', color: 'text-primary' },
                    { label: 'Technologies Mastered', value: '20+', color: 'text-accent' },
                    { label: 'Lines of Code', value: '50K+', color: 'text-primary' },
                    { label: 'Coffee Consumed', value: '∞', color: 'text-accent' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-foreground-secondary">{stat.label}</span>
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </ScrollScale>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-gradient-surface/50 relative">
        <div className="container mx-auto px-6">
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
          </RevealText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 h-full">
                  <h3 className="text-lg font-semibold mb-6 text-primary flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.8 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-foreground-muted">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="container mx-auto px-6">
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
          </RevealText>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-6 w-5 h-5 bg-accent rounded-full border-4 border-background"></div>
                  <Card className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <h3 className="text-xl font-bold">Tecnics Integration Technologies</h3>
                    </div>
                    <div className="text-accent font-medium mb-2">Full-Stack Developer Intern | June 2025 – Aug 2025</div>
                    <div className="text-foreground-muted text-sm mb-4">Hyderabad, India</div>
                    <ul className="space-y-2 text-foreground-secondary">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        Designed and launched a secure intranet portal used by 500+ employees, enhancing internal workflows and reducing manual communication by 40%
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        Developed 20+ modular RESTful APIs with 100% API validation using Postman, and integrated with a responsive frontend
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        Deployed and maintained the platform on live servers, achieving 99.9% uptime and supporting uninterrupted access for all departments
                      </li>
                    </ul>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-gradient-surface/50 relative">
        <div className="container mx-auto px-6">
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
          </RevealText>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-6 bg-card border-card-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <h4 className="text-lg font-semibold">Thapar Institute of Engineering and Technology</h4>
                  </div>
                  <div className="text-accent mb-2">B.E, Computer Science Engineering</div>
                  <div className="text-foreground-muted">2022 - Present</div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6 bg-card border-card-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <h4 className="text-lg font-semibold">SNEH International School</h4>
                  </div>
                  <div className="text-foreground-muted">
                    <div>10th Grade: 92.7%</div>
                    <div>12th Grade: 82.5%</div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6">
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
          </RevealText>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-surface hover:bg-surface-elevated rounded-full transition-colors"
                          title="Live Demo"
                        >
                          <Eye size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-surface hover:bg-surface-elevated rounded-full transition-colors"
                          title="GitHub Repository"
                        >
                          <Github size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-surface hover:bg-surface-elevated rounded-full transition-colors"
                          title="View Code"
                        >
                          <Code size={16} />
                        </motion.button>
                      </div>
                    </div>

                    <p className="text-foreground-secondary">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-foreground-secondary flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/20 text-primary text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Games Section */}
      <section id="games" className="py-32 bg-gradient-surface/50 relative">
        <div className="container mx-auto px-6">
          <InteractiveGames />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
          </RevealText>

          <div className="grid lg:grid-cols-2 gap-16">
            <RevealText delay={0.3}>
              <Card className="p-8 bg-card border-card-border">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-input border-input-border"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-input border-input-border"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-input border-input-border h-32 resize-none"
                      required
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full gap-2 bg-gradient-primary hover:opacity-90">
                      <Send size={18} />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </RevealText>

            <RevealText delay={0.6}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <p className="text-foreground-secondary mb-8 leading-relaxed">
                    Ready to bring your ideas to life? I'm always excited to work on challenging projects 
                    and collaborate with innovative teams.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'yashrajarora79@gmail.com', href: 'mailto:yashrajarora79@gmail.com' },
                    { icon: Phone, label: 'Phone', value: '+91 9582050262', href: 'tel:+919582050262' },
                    { icon: MapPin, label: 'Location', value: 'India', href: '#' },
                    { icon: Linkedin, label: 'LinkedIn', value: 'yashrajarora04070500', href: 'https://www.linkedin.com/in/yashrajarora04070500/' }
                  ].map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-surface hover:bg-surface-elevated rounded-lg transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 10 }}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <contact.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-foreground-secondary group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <Card className="p-6 bg-gradient-surface border-card-border">
                  <h4 className="font-semibold mb-3 text-primary">Availability</h4>
                  <p className="text-foreground-secondary">
                    Open to new opportunities and freelance projects. 
                    Currently available for remote collaborations worldwide.
                  </p>
                </Card>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-foreground-secondary"
            >
              © 2024 Yash Raj Arora. Built with ❤️ using React, TypeScript & Framer Motion
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InteractivePortfolio;
