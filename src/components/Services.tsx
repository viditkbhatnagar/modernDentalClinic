import { Syringe, Bluetooth as Sparkles, Smile, Stethoscope, Crown, Heart, Activity, Drill } from 'lucide-react';

const services = [
  {
    icon: Syringe,
    title: 'Dental Implants',
    description: 'Regain your confident smile with our state-of-the-art implant procedure offering permanent tooth replacement.'
  },
  {
    icon: Drill,
    title: 'Root Canal Treatment',
    description: 'Advanced and painless root canal therapy to save your natural teeth and relieve pain.'
  },
  {
    icon: Activity,
    title: 'Cavity Filling',
    description: 'High-quality dental fillings to restore damaged teeth and prevent further decay.'
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional teeth whitening treatments for a brighter, more radiant smile.'
  },
  {
    icon: Smile,
    title: 'Orthodontic Braces',
    description: 'Comprehensive orthodontic solutions to align your teeth and improve your bite.'
  },
  {
    icon: Crown,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and complete smile makeovers.'
  },
  {
    icon: Stethoscope,
    title: 'Dental Crowns & Bridges',
    description: 'Restore damaged teeth and replace missing teeth with durable crowns and bridges.'
  },
  {
    icon: Heart,
    title: 'Periodontal Treatments',
    description: 'Comprehensive gum care to maintain optimal oral health and prevent disease.'
  }
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow
                         transform hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;