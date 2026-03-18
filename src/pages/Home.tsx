import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe, Smartphone, Users, Award, Briefcase, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Database className="w-8 h-8 text-brand-500" />,
    title: 'SAP Consulting',
    description: 'Expert guidance on SAP S/4HANA migration, implementation, and optimization.',
  },
  {
    icon: <Code className="w-8 h-8 text-accent-500" />,
    title: 'Custom Implementation',
    description: 'Tailored enterprise software solutions built to match your unique business processes.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-brand-400" />,
    title: 'Support & Maintenance',
    description: '24/7 dedicated support and continuous monitoring for your critical business applications.',
  },
  {
    icon: <Users className="w-8 h-8 text-accent-400" />,
    title: 'Staff Augmentation',
    description: 'Highly skilled technical resources to scale your team and accelerate project delivery.',
  },
];

const stats = [
  { value: '50+', label: 'Successful Projects', icon: <Award className="w-6 h-6" /> },
  { value: '10+', label: 'Global Clients', icon: <Globe className="w-6 h-6" /> },
  { value: '100%', label: 'Delivery Rate', icon: <Smartphone className="w-6 h-6" /> },
  { value: '24/7', label: 'Support Uptime', icon: <Users className="w-6 h-6" /> },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-600/20 blur-[100px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-600/20 blur-[120px] mix-blend-screen" style={{ animationDelay: '2s', animationDuration: '7s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-ping" />
              <span className="text-sm font-medium">Digital Innovation Partner</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
            >
              Transforming Businesses with <br className="hidden md:block" />
              <span className="text-gradient">SAP & Digital Solutions</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto"
            >
              We engineer scalable, high-performance IT solutions that drive growth and optimize your enterprise operations.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" variant="gradient" className="w-full sm:w-auto text-lg px-8 h-14" asChild>
                <Link to="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 glass dark:text-white" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Core Expertise" 
            subtitle="Comprehensive IT services tailored to propel your business forward in the digital age."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to={`/services`} className="inline-flex items-center text-brand-600 dark:text-brand-400 font-medium text-sm hover:underline">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Stats */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                title="Why Choose MidhilTech?" 
                subtitle="We don't just deliver software; we deliver measurable business outcomes. Our deep industry knowledge and technical excellence set us apart."
              />
              <div className="space-y-4 mb-8">
                {[
                  'Proven track record of successful enterprise deployments',
                  'Client-centric approach with transparent communication',
                  'Top-tier engineering talent and SAP certified consultants',
                  'Agile methodologies for faster time-to-market'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/about">More About Us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-6 sm:p-8 rounded-2xl text-center border-t-4 border-t-brand-500">
                  <div className="w-12 h-12 mx-auto rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl sm:text-4xl font-extrabold mb-2 dark:text-white">{stat.value}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-slate-900 dark:from-brand-950 dark:to-slate-950 -z-10" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-400 via-transparent to-transparent -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Digitalize Your Enterprise?</h2>
            <p className="text-brand-100 text-lg md:text-xl mb-10">
              Let's discuss how our SAP and IT consulting services can help you achieve your business goals faster.
            </p>
            <Button size="lg" variant="gradient" className="h-14 px-8 text-lg bg-white text-brand-900 hover:bg-slate-100" asChild>
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
