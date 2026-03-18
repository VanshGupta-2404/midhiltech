import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold shadow-md">
                M
              </div>
              <span className="text-xl font-bold text-white">Midhil<span className="text-brand-400">Tech</span></span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Transforming businesses globally with cutting-edge SAP implementation, IT consulting, and digital engineering solutions.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">SAP Consulting</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Implementation</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Support & Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Training</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Staff Augmentation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-brand-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-brand-400 shrink-0" />
                <span>123 Innovation Drive, Tech Park, City 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-400 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-400 shrink-0" />
                <span>contact@midhiltechnologies.com</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Midhil Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
