import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen pt-12 md:pt-24 pb-20">
      
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind or need assistance with your IT infrastructure? Our team is ready to help you navigate your digital transformation.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          
          {/* Contact Information Side */}
          <div className="lg:col-span-2 bg-gradient-to-br from-brand-900 to-slate-900 text-white p-10 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 blur-3xl inset-0 m-auto rounded-full"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
            <p className="text-slate-300 mb-12 relative z-10">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-400 mb-1">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-400 mt-1">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-400 mb-1">Email</h4>
                  <p>contact@midhiltechnologies.com</p>
                  <p className="text-sm text-slate-400 mt-1">support@midhiltechnologies.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-400 mb-1">Headquarters</h4>
                  <p>123 Innovation Drive<br />Tech Park, New York<br />NY 10001, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-10 md:p-12">
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    required 
                    className="w-full h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    required 
                    className="w-full h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium block">What are you interested in?</label>
                <div className="flex flex-wrap gap-3">
                  {['SAP Consulting', 'Custom Dev', 'Support', 'Staffing', 'Other'].map((interest) => (
                    <label key={interest} className="cursor-pointer">
                      <input type="radio" name="interest" className="peer sr-only" value={interest} />
                      <div className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-sm peer-checked:bg-brand-600 peer-checked:text-white peer-checked:border-brand-600 transition-colors">
                        {interest}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  required 
                  rows={4}
                  className="w-full p-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                variant={isSuccess ? "default" : "gradient"} 
                className="w-full sm:w-auto mt-4 min-w-[200px]"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Sending... <span className="animate-spin w-4 h-4 rounded-full border-2 border-white border-t-transparent" /></span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2">Message Sent! ✓</span>
                ) : (
                  <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4 ml-1" /></span>
                )}
              </Button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
