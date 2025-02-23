const doctors = [
  {
    name: 'Dr. Siddarth Mathur',
    degree: 'BDS',
    phone: '+91-9829755534',
    bio: 'With years of experience in restorative dentistry, Dr. Siddarth specializes in root canal treatments and dental implants.',
    image: '/doctor-images/siddarth.jpg'
  },
  {
    name: 'Dr. Anshu Mathur',
    degree: 'BDS, MDS',
    phone: '+91-9928708209',
    bio: 'An expert in cosmetic dentistry and orthodontics, Dr. Anshu is dedicated to perfecting patients\' smiles.',
    image: '/doctor-images/anshu2.jpg'
  }
];

const Doctors = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Meet Our Experts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden
                         transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-1 text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-teal-600 font-medium mb-4">{doctor.degree}</p>
                <p className="text-gray-600 mb-4">{doctor.bio}</p>
                <a
                  href={`tel:${doctor.phone}`}
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                >
                  {doctor.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
