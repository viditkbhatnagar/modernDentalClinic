import { Smile } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8">
          <Smile className="w-12 h-12 text-teal-400 mb-4" />
          <h2 className="text-2xl font-bold">Modern Dental Clinic</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#doctors" onClick={(e) => { e.preventDefault(); document.querySelector('#doctors')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors">Dental Implants</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors">Root Canal</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors">Teeth Whitening</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-white transition-colors">Orthodontics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">+91-9829755534</li>
              <li className="text-gray-400">+91-9928708209</li>
              <li className="text-gray-400">459-A, Talwandi</li>
              <li className="text-gray-400">Kota, 324005</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Morning: 10 AM – 1 PM</li>
              <li className="text-gray-400">Evening: 5 PM – 9 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2025 Modern Dental Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;