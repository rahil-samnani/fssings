import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SimpleCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg',
            title: 'Professional Business Cards',
            description: 'High-quality printing for your business needs'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg',
            title: 'Custom Design Solutions',
            description: 'Tailored designs that represent your brand'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&auto=format',
            title: 'Premium Materials',
            description: 'Quality materials for lasting impressions'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&auto=format',
            title: 'Fast Turnaround',
            description: 'Quick delivery without compromising quality'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=400&fit=crop&auto=format',
            title: 'Modern Workspace',
            description: 'State-of-the-art printing technology'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-play functionality (optional)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full mx-auto bg-white shadow-lg overflow-hidden top-32">
            {/* Main carousel container */}
            <div className="relative h-[550px] overflow-hidden">
                {/* Slides */}
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="w-full h-full flex-shrink-0 relative"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                            {/* Content overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                                <p className="text-gray-200">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-white text-blue-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white text-blue-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dots navigation on top of image */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${currentSlide === index
                                    ? 'bg-white scale-125 shadow-sm'
                                    : 'bg-white/40 hover:bg-white/70'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SimpleCarousel;
