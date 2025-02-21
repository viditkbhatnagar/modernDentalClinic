import { Smile } from 'lucide-react';

const Hero = () => {
  const handleAppointmentClick = () => {
    const phoneNumber1 = '919928708209'; // First phone number (in international format without the +)
    const phoneNumber2 = '919829755534'; // Second phone number (in international format without the +)
    const message = encodeURIComponent("Hi, I'm interested in booking an appointment.");

    // Open two WhatsApp chats in new tabs
    window.open(`https://wa.me/${phoneNumber1}?text=${message}`, '_blank');
    window.open(`https://wa.me/${phoneNumber2}?text=${message}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-teal-50 to-white overflow-hidden">
      {/* Dynamic SVG background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(204, 251, 241, 0.2)" />
              <stop offset="50%" stopColor="rgba(94, 234, 212, 0.2)" />
              <stop offset="100%" stopColor="rgba(204, 251, 241, 0.2)" />
            </linearGradient>
          </defs>
          <path
            className="animate-wave-slow"
            d="M0,30 Q25,40 50,30 T100,30 V100 H0 Z"
            fill="url(#wave-gradient)"
          />
          <path
            className="animate-wave-fast"
            d="M0,35 Q25,45 50,35 T100,35 V100 H0 Z"
            fill="url(#wave-gradient)"
            opacity="0.8"
          />
        </svg>
        
        {/* Floating teeth animations */}
        {[...Array(5)].map((_, i) => (
          <Smile
            key={i}
            className={`absolute text-teal-100 animate-float-${i + 1} opacity-30`}
            size={64 + i * 16}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center z-10">
        <div className="mb-8 animate-bounce-slow">
          <Smile className="w-20 h-20 text-teal-600" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Reliable Care for Bright Smiles
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl animate-fade-in-delay-1">
          Quality Dental Solutions in a Warm & Friendly Environment
        </p>
        <button 
          className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 animate-fade-in-delay-2"
          onClick={handleAppointmentClick}
        >
          Book an Appointment Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
