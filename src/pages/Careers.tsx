import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { MapPin, Briefcase, Clock, ChevronRight } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior SAP S/4HANA Consultant',
    department: 'Consulting',
    location: 'New York, USA (Hybrid)',
    type: 'Full-time'
  },
  {
    id: 2,
    title: 'Principal Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    id: 3,
    title: 'Cloud Solutions Architect',
    department: 'Cloud & Infrastructure',
    location: 'London, UK',
    type: 'Full-time'
  },
  {
    id: 4,
    title: 'Data Scientist (AI/ML)',
    department: 'Data & Analytics',
    location: 'Toronto, Canada (Hybrid)',
    type: 'Full-time'
  }
];

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen pt-12 md:pt-24 pb-20">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Join the <span className="text-gradient">MidhilTech</span> Team
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Build the future of enterprise software with us. We are looking for passionate problem-solvers to join our global network of technologists.
          </p>
        </motion.div>
      </section>

      {/* Perks Grid */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 mb-16 md:mb-24">
         <div className="container mx-auto px-4 md:px-6">
           <SectionHeading title="Life at MidhilTech" subtitle="We invest heavily in our people, offering world-class benefits and a culture of continuous learning." centered />
           
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
             {[
               { title: 'Remote-First Culture', desc: 'Work from anywhere with our flexible remote and hybrid options.' },
               { title: 'Continuous Learning', desc: 'Generous stipends for certifications, courses, and conferences.' },
               { title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
               { title: 'Equity Options', desc: 'We believe everybody who helps build the company should own a piece of it.' },
               { title: 'Top-tier Equipment', desc: 'Get the latest MacBook, monitors, and ergonomic setup for your home office.' },
               { title: 'Generous PTO', desc: 'Take the time you need to recharge with our flexible paid time off policy.' }
             ].map((perk, i) => (
               <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
               >
                 <h4 className="font-bold text-lg mb-2">{perk.title}</h4>
                 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
               </motion.div>
             ))}
           </div>
         </div>
      </section>

      {/* Open Positions List */}
      <section className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionHeading title="Open Positions" subtitle="Find your next career-defining role." />
        
        <div className="flex flex-col gap-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group glass-card hover:border-brand-500/50 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.department}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.type}</span>
                </div>
              </div>
              <Button variant="ghost" className="shrink-0 sm:self-center self-start group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30">
                Apply Now <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center p-8 bg-brand-50 dark:bg-brand-900/20 rounded-2xl border border-brand-100 dark:border-brand-900/50">
          <h4 className="font-bold text-lg mb-2">Don't see a perfect fit?</h4>
          <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-md mx-auto text-sm">
            We are always looking for great talent. Send us your resume and we'll keep you in mind for future openings.
          </p>
          <Button variant="outline">Submit Open Application</Button>
        </div>
      </section>

    </div>
  );
}
