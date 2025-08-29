import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
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
    'Tools & Others': [
      { name: 'Git', level: 85 },
      { name: 'AWS', level: 70 },
      { name: 'Machine Learning', level: 65 },
      { name: 'Tableau', level: 70 }
    ]
  };

  const languages = [
    { name: 'C/C++', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'SQL', level: 80 }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
                I'm a full-stack developer passionate about solving real-world problems, 
                building intuitive web applications, and crafting efficient algorithmic solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="fade-in-left">
              <div>
                <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
                <div className="space-y-4 text-foreground-secondary">
                  <p>
                    My journey in software development began with a curiosity about how 
                    technology can solve complex problems. I've developed a passion for 
                    creating seamless user experiences while ensuring robust backend architecture.
                  </p>
                  <p>
                    With expertise in the MERN stack, I've built applications ranging from 
                    corporate intranet portals to personal finance management platforms. 
                    I believe in writing clean, maintainable code and following best practices 
                    in software development.
                  </p>
                  <p>
                    When I'm not coding, I enjoy exploring new technologies, contributing to 
                    open-source projects, and staying updated with the latest trends in 
                    web development and machine learning.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <Card className="p-8 bg-gradient-surface border-card-border">
                <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={lang.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <span className="text-sm text-foreground-muted">{lang.level}%</span>
                      </div>
                      <Progress value={lang.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto">
                Here's a breakdown of my technical skills and the technologies I work with
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <AnimatedSection 
                key={category} 
                animation="scale-in" 
                delay={categoryIndex * 150}
              >
                <Card className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                  <div className="space-y-3">
                    {skillList.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-foreground-muted">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
              <p className="text-foreground-secondary max-w-2xl mx-auto">
                I specialize in full-stack development with a focus on modern web technologies
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description: 'Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
                icon: '🎨'
              },
              {
                title: 'Backend Development',
                description: 'Building robust APIs and server-side applications with Node.js, Express, and database integration.',
                icon: '⚙️'
              },
              {
                title: 'Full-Stack Solutions',
                description: 'End-to-end application development from conception to deployment with modern DevOps practices.',
                icon: '🚀'
              }
            ].map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-in-up" delay={index * 200}>
                <Card className="p-6 text-center bg-card border-card-border hover:border-primary/50 transition-all duration-300 group hover:shadow-elevation">
                  <div className="text-4xl mb-4 group-hover:animate-float">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground-secondary">
                    {service.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;