import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: '/clinic-images/dental-chair.jpg',
    caption: 'State-of-the-Art Treatment Room'
  },
  {
    url: '/clinic-images/dental-chair-2.jpg',
    caption: 'Advanced Dental Equipment'
  },
  {
    url: '/clinic-images/reception.jpg',
    caption: 'Our Modern Reception Area'
  },
  {
    url: '/clinic-images/reception-2.jpg',
    caption: 'Comfortable Patient Lounge'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-100">
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative flex items-center justify-center">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white text-xl font-semibold">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full
                   shadow-lg hover:bg-white transition-colors"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full
                   shadow-lg hover:bg-white transition-colors"
        onClick={goToNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors
                       ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
