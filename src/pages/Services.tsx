import { motion } from 'framer-motion';
import { Database, Code, Briefcase, Users, LineChart, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'sap-consulting',
    icon: <Database className="w-10 h-10 text-brand-500" />,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    title: 'SAP Consulting & Implementation',
    description: 'End-to-end SAP S/4HANA implementation, migration, and optimization services. Our certified consultants ensure a smooth transition with minimal disruption to your daily operations.',
    benefits: [
      'Streamlined business processes',
      'Real-time data insights and analytics',
      'Enhanced enterprise connectivity',
      'Seamless cloud deployment strategies'
    ]
  },
  {
    id: 'custom-dev',
    icon: <Code className="w-10 h-10 text-accent-500" />,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    title: 'Custom Software Engineering',
    description: 'Bespoke web and mobile applications engineered to solve complex business challenges. We utilize modern tech stacks to deliver scalable, secure, and intuitive digital products.',
    benefits: [
      'Responsive, user-centric designs',
      'Microservices architecture',
      'API integration and development',
      'Automated testing and QA'
    ]
  },
  {
    id: 'support-maintenance',
    icon: <Briefcase className="w-10 h-10 text-brand-400" />,
    image: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80&w=800',
    title: 'Support & Managed Services',
    description: 'Proactive monitoring, maintenance, and L1/L2/L3 support for your enterprise applications. We ensure your systems are always up-to-date and performing optimally.',
    benefits: [
      '24/7/365 proactive monitoring',
      'Guaranteed Service Level Agreements (SLAs)',
      'Security patching and system updates',
      'Performance tuning and optimization'
    ]
  },
  {
    id: 'data-analytics',
    icon: <LineChart className="w-10 h-10 text-accent-400" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    title: 'Data Analytics & AI',
    description: 'Transform raw data into actionable intelligence. Leverage artificial intelligence and machine learning to predict trends, automate processes, and make informed decisions.',
    benefits: [
      'Predictive modeling and forecasting',
      'Interactive business intelligence dashboards',
      'Data warehousing and architecture',
      'Generative AI integrations'
    ]
  },
  {
    id: 'staffing',
    icon: <Users className="w-10 h-10 text-brand-600" />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    title: 'IT Staff Augmentation',
    description: 'Quickly scale your development capabilities with our specialized technical talent. Flexible staffing models to match your project needs and timelines.',
    benefits: [
      'On-demand access to top-tier talent',
      'Seamless integration with your team',
      'Reduced recruitment and training overhead',
      'Flexible short-term or long-term engagement'
    ]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen pt-12 md:pt-24 pb-20">
      
      {/* Header Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Comprehensive technology solutions designed to empower your enterprise, streamline processes, and drive innovation.
          </p>
        </motion.div>
      </section>

      {/* Services List Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16 md:gap-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
            >
              
              {/* Service Visual representation */}
              <div className="w-full lg:w-1/2">
                <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl relative group">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg flex items-center justify-center"
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <h4 className="font-semibold text-foreground mb-4">Key Benefits:</h4>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="glass dark:border-slate-700" asChild>
                  <Link to={`/contact?service=${service.id}`}>Discuss Your Needs</Link>
                </Button>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 md:px-6 mt-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 md:p-16 text-center bg-gradient-to-br from-brand-900 via-slate-900 to-accent-950 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Not sure which service is right for you?</h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Our consultants are ready to analyze your business challenge and recommend the optimal technology path forward.
          </p>
          <Button size="lg" variant="gradient" className="relative z-10" asChild>
            <Link to="/contact">Get a Free Assessment</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  );
}
