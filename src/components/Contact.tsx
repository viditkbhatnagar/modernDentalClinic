import { MapPin, Clock, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Visit Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-teal-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600 mb-4">
                  459-A, Talwandi, Sheela Chaudhry Road,<br />
                  In front of Hanuman Temple,<br />
                  Pin Code - 324005
                </p>
                <a 
                  href="https://maps.app.goo.gl/oDaeLMiRDDySEHTB7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700"
                >
                  <span className="mr-2">View on Google Maps</span>
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-teal-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Timings</h3>
                <p className="text-gray-600">
                  Morning: 10 AM – 1 PM<br />
                  Evening: 5 PM – 9 PM
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-teal-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-gray-600">
                  Dr. Siddarth Mathur: <a href="tel:+919829755534" className="text-teal-600 hover:text-teal-700">+91-9829755534</a><br />
                  Dr. Anshu Mathur: <a href="tel:+919928708209" className="text-teal-600 hover:text-teal-700">+91-9928708209</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.844431549489!2d75.8543641!3d25.1441499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f835f337e8a3b%3A0x42c53ea4c6595ef4!2sDAV%20Senior%20Secondary%20School!5e0!3m2!1sen!2sin!4v1647940434953!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg mb-6"
            ></iframe>
            <h3 className="text-2xl font-semibold mb-6 text-center">Ready for a Consultation?</h3>
            <div className="space-y-4">
              {[
                { name: 'Dr. Siddarth Mathur', phone: '+91-9829755534' },
                { name: 'Dr. Anshu Mathur', phone: '+91-9928708209' }
              ].map((doctor, index) => (
                <a
                  key={index}
                  href={`tel:${doctor.phone}`}
                  className="block w-full py-3 px-6 text-center bg-teal-600 text-white rounded-lg
                           hover:bg-teal-700 transition-colors duration-300"
                >
                  Call {doctor.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact