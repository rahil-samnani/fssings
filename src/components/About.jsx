import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Award, Clock, Star, Quote } from 'lucide-react';

const AboutTestimonialSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Mahad Rabi",
            role: "Business Owner",
            company: "Tech Innovations Ltd.",
            content: "I had an urgent request to print business cards, and they completed the job in record time with exceptional customer service. The new management is friendly and very helpful. Highly recommend!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Marketing Director",
            company: "Creative Solutions Inc.",
            content: "Fast Track Signs & Printing has been our go-to partner for all signage needs. Their quality is unmatched and their team always delivers on time. The custom vehicle graphics they created exceeded our expectations!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Michael Chen",
            role: "Restaurant Owner",
            company: "Urban Bistro",
            content: "From menu design to storefront signage, they handled everything professionally. The in-house design consultants guided us through every step. Our brand has never looked better!",
            rating: 4,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "Emily Rodriguez",
            role: "Event Coordinator",
            company: "Premier Events",
            content: "Their trade show displays and banners are top quality. The modern equipment and dedicated team make all the difference. They truly help take your brand to the next level. Do checkout their services!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        }
    ];

    const stats = [
        { icon: Clock, number: "40+", label: "Years of Excellence", color: "text-blue-600" },
        { icon: Users, number: "10,000+", label: "Happy Customers", color: "text-blue-500" },
        { icon: Award, number: "50+", label: "Services Offered", color: "text-blue-700" }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-50">
            {/* About Us Section */}
            <section className="relative py-20 px-4 overflow-hidden bg-white">
                {/* Subtle Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-32 left-10 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl font-light mb-4">
                            <span className="font-bold text-blue-600">About </span>
                            <span className="text-gray-800">Us</span>
                        </h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 mx-auto mb-8 rounded-full shadow-lg"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Transforming brands through exceptional printing and signage solutions since 1984
                        </p>
                    </div>

                    {/* Modern Card Layout */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-8">
                        {/* Main Content Card */}
                        <div className={`lg:col-span-2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div
                                className="group relative bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                }}
                                style={{
                                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
                                }}
                            >
                                {/* Dynamic lighting effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.06), transparent 40%)`
                                    }}
                                ></div>

                                {/* Animated border gradient */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1), rgba(59, 130, 246, 0.1))',
                                        padding: '2px'
                                    }}>
                                    <div className="w-full h-full bg-white rounded-3xl"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-8">
                                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                                            <span className="text-blue-700 font-semibold text-sm">Since 1984</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                                            Edmonton's Premier Printing Partner
                                        </h3>
                                    </div>

                                    <div className="space-y-6 text-gray-700">
                                        <p className="text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                            Fast Track Signs & Printing has been Edmonton's top choice for quality printing at unbeatable prices. Our team is dedicated to providing you the highest quality of service & customer experience.
                                        </p>
                                        <p className="text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                            We offer comprehensive Small & Large format custom digital solutions: Business cards, Brochures, Catalogues, Envelopes, Interior & Exterior signage, Vehicle graphics, trade show displays, and banners.
                                        </p>
                                    </div>

                                    <div className="mt-8 flex items-center space-x-4">
                                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full group-hover:w-16 transition-all duration-300"></div>
                                        <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">Your Vision, Our Expertise</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className={`space-y-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;
                                        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                    }}
                                >
                                    {/* Mouse tracking light effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.08), transparent 50%)`
                                        }}
                                    ></div>

                                    <div className="relative z-10 flex items-center space-x-4">
                                        <div className={`p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                            <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 group-hover:scale-105 transform">
                                                {stat.number}
                                            </div>
                                            <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
                                        </div>
                                    </div>

                                    {/* Animated accent line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 group-hover:w-full transition-all duration-500 ease-out"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
                    <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 px-2">
                            What Our Clients Say
                        </h2>
                        <div className="w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-white mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full"></div>
                        <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed">
                            Don't just take our word for it - here's what our valued customers have to say about their experience with us.
                        </p>
                    </div>

                    {/* Testimonial Carousel */}
                    <div className="relative px-2 sm:px-4 lg:px-0">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-blue-200 max-w-4xl mx-auto">
                            <div className="flex flex-col items-center text-center">
                                {/* Quote Icon */}
                                <div className="mb-4 sm:mb-6">
                                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600 opacity-50" />
                                </div>

                                {/* Testimonial Content */}
                                <div className="mb-6 sm:mb-8">
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 italic px-2 sm:px-0">
                                        "{testimonials[currentTestimonial].content}"
                                    </p>

                                    {/* Stars */}
                                    <div className="flex justify-center mb-4 sm:mb-6 space-x-1">
                                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>

                                {/* Author Info */}
                                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 sm:border-4 border-blue-100 shadow-lg flex-shrink-0"
                                    />
                                    <div className="text-center sm:text-left">
                                        <h4 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg">
                                            {testimonials[currentTestimonial].name}
                                        </h4>
                                        <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                                            {testimonials[currentTestimonial].role}
                                        </p>
                                        <p className="text-blue-600 font-medium text-xs sm:text-sm lg:text-base">
                                            {testimonials[currentTestimonial].company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 touch-manipulation"
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 touch-manipulation"
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12 space-x-2 sm:space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${index === currentTestimonial
                                    ? 'bg-white shadow-lg scale-125'
                                    : 'bg-white/50 hover:bg-white/75'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero Section Above Footer */}
            <section>
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900 opacity-30"></div>

                    {/* Animated background elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-10 right-20 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 right-10 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>

                    <div className="container mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Begin your printing journey
                            <br />
                            <span className="text-blue-200">with us today!</span>
                        </h2>
                        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                            We help you create stunning signs and prints with our
                            advanced printing solutions and expert craftsmanship.
                        </p>
                        <button className="bg-white text-blue-800 font-semibold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Get a Quote →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutTestimonialSection;