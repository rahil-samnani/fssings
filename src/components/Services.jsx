import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: 'Graphic Design',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&auto=format',
            description: 'Creative design solutions for all your branding needs'
        },
        {
            id: 2,
            title: 'Business Cards',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format',
            description: 'Professional business cards that make lasting impressions'
        },
        {
            id: 3,
            title: 'Large Format Printing',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format',
            description: 'High-quality large format prints for banners and signage'
        },
        {
            id: 4,
            title: 'Vinyl Banners',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
            description: 'Durable vinyl banners for outdoor and indoor advertising'
        },
        {
            id: 5,
            title: 'Vehicle Wraps',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&auto=format',
            description: 'Professional vehicle wrapping for mobile advertising'
        },
        {
            id: 6,
            title: 'Trade Show Displays',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&auto=format',
            description: 'Eye-catching displays for trade shows and exhibitions'
        },
        {
            id: 7,
            title: 'Digital Printing',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format',
            description: 'High-resolution digital printing for various materials'
        },
        {
            id: 8,
            title: 'Custom Signage',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format',
            description: 'Custom indoor and outdoor signage solutions'
        },
        {
            id: 9,
            title: 'Promotional Materials',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&auto=format',
            description: 'Marketing materials including flyers, brochures, and posters'
        }
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white mt-24">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-light mb-4">
                        <span className="text-gray-800">Our </span>
                        <span className="font-bold text-blue-600">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover our comprehensive range of printing and design services tailored to meet your business needs
                    </p>
                </div>

                {/* Services Grid - 3 rows of 3 cards each */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-32 max-w-5xl mx-auto">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group text-center"
                        >
                            {/* Image Container */}
                            <div className="relative mb-6 mx-auto w-64 h-48 overflow-hidden rounded-2xl bg-white shadow-lg">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:translate-y-2"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-75 transition-all duration-500 rounded-2xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="w-12 h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-medium">View Details</p>
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300 relative">
                                {service.title}
                                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
                            </h3>

                            {/* Learn More Link */}
                            <button className="text-pink-500 hover:text-pink-600 font-medium text-sm group-hover:scale-105 transition-all duration-300 underline">
                                learn more
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;