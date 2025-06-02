import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const ConferenceGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  // Replace with your actual image URLs
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308099657.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319008140.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125846.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308099665.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125854.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308099671.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125897.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308099676.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319008146.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125906.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308099682.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319008153.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125913.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125921.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319008160.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125928.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125934.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319008173.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125943.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308230039.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319008180.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125951.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/IMG-20221210-WA0009.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308230048.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308230054.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308230069.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319008202.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/IMG-20221210-WA0010.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/IMG-20221210-WA0013.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/IMG-20221210-WA0012.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/IMG-20221212-WA0004.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319008222.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308230086.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675308230081.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319008215.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/IMG-20221212-WA0005.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125776.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125838.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/IMG-20221212-WA0007.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/sample-3f203.appspot.com/o/1675319125731.jpg?alt=media',
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="pt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Gallery
          </h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-200 aspect-[4/3]"
              onClick={() => openLightbox(index)}
            >
              {/* Loading skeleton */}
              {!imageLoaded[index] && (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
              )}
              
              {/* Image */}
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded[index] ? 'block' : 'hidden'
                }`}
                onLoad={() => handleImageLoad(index)}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="bg-black/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-gray-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 overflow-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="fixed top-6 right-6 z-10 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="fixed left-6 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="fixed right-6 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image container */}
            <div className="relative max-w-4xl max-h-[80vh] w-full mx-auto flex items-center justify-center">
              <img
                src={images[currentImage]}
                alt={`Gallery image ${currentImage + 1}`}
                className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Counter */}
            {images.length > 1 && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium">
                {currentImage + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-gray-400/40 rounded-full animate-pulse"></div>
      <div className="fixed top-32 right-20 w-3 h-3 bg-gray-500/30 rounded-full animate-pulse delay-1000"></div>
      <div className="fixed bottom-32 left-16 w-1 h-1 bg-gray-600/50 rounded-full animate-pulse delay-500"></div>
      <div className="fixed bottom-20 right-32 w-2 h-2 bg-gray-400/40 rounded-full animate-pulse delay-700"></div>
    </div>
  );
};

export default ConferenceGallery;