import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yashrajarora79@gmail.com',
      link: 'mailto:yashrajarora79@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9582050262',
      link: 'tel:+919582050262'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'yashrajarora04070500',
      link: 'https://www.linkedin.com/in/yashrajarora04070500/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'yashrajarora',
      link: 'https://github.com/yashrajarora'
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
                Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Have a project in mind or want to discuss opportunities? 
                I'd love to hear from you. Let's create something amazing together.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection animation="fade-in-left">
              <Card className="p-8 bg-card border-card-border">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-input-border"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-input-border"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-input-border"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-input border-input-border resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gap-2 bg-gradient-primary hover:opacity-90"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="fade-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                  <p className="text-foreground-secondary mb-8">
                    I'm always interested in new opportunities, challenging projects, 
                    and meaningful collaborations. Whether you're a startup looking to 
                    build your MVP or an established company needing to enhance your 
                    digital presence, I'm here to help.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-surface hover:bg-surface-elevated rounded-lg transition-all duration-300 group hover:shadow-elevation"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-foreground-secondary group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <Card className="p-6 bg-gradient-surface border-card-border">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={20} className="text-primary" />
                    <h3 className="font-semibold">Location & Availability</h3>
                  </div>
                  <p className="text-foreground-secondary mb-2">
                    Based in India, working with clients globally
                  </p>
                  <p className="text-foreground-secondary">
                    Available for remote work and collaborations
                  </p>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-foreground-secondary mb-8 max-w-2xl mx-auto">
                Let's discuss your ideas and turn them into reality. I'm excited to hear about 
                your project and explore how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90" asChild>
                  <a href="mailto:yashrajarora79@gmail.com">
                    <Mail size={20} />
                    Email Me Directly
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="https://www.linkedin.com/in/yashrajarora04070500/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;