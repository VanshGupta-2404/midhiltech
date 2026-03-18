import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Target, Lightbulb, Shield, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: <Target className="w-6 h-6 text-brand-500" />,
    title: 'Excellence',
    description: 'We strive for exceptional quality in every line of code we write and every solution we deliver.'
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-accent-500" />,
    title: 'Innovation',
    description: 'Constantly exploring new technologies to provide our clients with a competitive edge.'
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-400" />,
    title: 'Integrity',
    description: 'Building trust through transparency, honest communication, and ethical business practices.'
  },
  {
    icon: <Users className="w-6 h-6 text-accent-400" />,
    title: 'Collaboration',
    description: 'Working closely with our clients as a unified team to achieve shared success.'
  }
];

const timeline = [
  { year: '2015', title: 'Company Founded', desc: 'Started as a small SAP consulting firm with 5 experts.' },
  { year: '2018', title: 'Global Expansion', desc: 'Opened offices in North America and expanded service portfolio.' },
  { year: '2021', title: 'Digital Transformation Practice', desc: 'Launched specialized AI and custom software engineering divisions.' },
  { year: '2025', title: 'Industry Leader', desc: 'Recognized as a premier enterprise IT partner with 50+ global deployments.' },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-12 md:pt-24 pb-20">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Empowering Enterprises Through <span className="text-gradient">Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Midhil Technologies is a premier IT consulting and engineering firm specializing in SAP implementations, custom software development, and digital transformation. We bridge the gap between complex business challenges and innovative technical solutions.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-brand-600 dark:text-brand-400">10+</span>
                <span className="text-sm font-medium text-slate-500">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-border mx-2 self-center"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-accent-600 dark:text-accent-400">200+</span>
                <span className="text-sm font-medium text-slate-500">Tech Experts</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden glass p-2 shadow-2xl">
              <div className="w-full h-full bg-slate-200 dark:bg-slate-800 rounded-2xl relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl font-bold">Our Global Headquarters</h3>
                </div>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-500/20 blur-3xl rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-500/20 blur-3xl rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision & Values */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Core Values" subtitle="The principles that guide our work, our culture, and our relationships." centered />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{val.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <SectionHeading title="Our Journey" subtitle="A decade of continuous growth and commitment to excellence." centered />
        
        <div className="max-w-4xl mx-auto mt-16">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 mb-12 relative"
            >
              {/* Line connector */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-6 top-14 bottom-[-48px] w-0.5 bg-slate-200 dark:bg-slate-800"></div>
              )}
              
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center border-4 border-white dark:border-slate-950 z-10">
                <div className="w-3 h-3 rounded-full bg-brand-600 dark:bg-brand-400" />
              </div>
              
              <div className="pt-2">
                <span className="text-sm font-bold text-accent-600 dark:text-accent-400 tracking-wider uppercase mb-1 block">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join the team CTA */}
      <section className="container mx-auto px-4 md:px-6 mt-10">
        <div className="glass-card border-brand-200 dark:border-brand-900 p-10 md:p-14 rounded-3xl text-center shadow-lg shadow-brand-500/5">
          <h2 className="text-3xl font-bold mb-4">Want to be part of our story?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            We're always looking for talented engineers, consultants, and visionaries to join our growing global team.
          </p>
          <Button size="lg" asChild>
            <Link to="/careers">View Open Positions</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
