import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter subscription:', email);
        setEmail('');
        alert('Thank you for subscribing to our newsletter!');
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submission:', formData);
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('Thank you for your message! We\'ll get back to you soon.');
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            {/* Decorative Separator */}
            <div className="relative">
            <div className="bottom-64 left-0 right-0 z-40 h-1 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300"></div>
                {/* Main Footer */}
                <footer className="bg-white/90 text-dark pt-20 pb-8 px-14">
                    <div className="container mx-auto px-4">
                        {/* Newsletter Section */}
                        <div className="mb-12 text-center">
                            <h3 className="text-2xl font-bold mb-4">
                                Want insights from Fastrack Signs
                                delivered straight to your mailbox?
                            </h3>
                            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                                Stay updated with the latest printing tips, design trends, and sign solutions from Fastrack Signs.
                                Delivered straight to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="flex-1 px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none placeholder-gray-400"
                                />
                                <button
                                    onClick={handleNewsletterSubmit}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-3">
                                By clicking submit, you'll receive updates from Fastrack Signs.
                                We promise not to spam.
                            </p>
                        </div>

                        {/* Main Footer Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                            {/* Company Info */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <div>
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4">Faster, Stronger, Reliable.</p>

                                {/* Business Address & Hours */}
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-sm">123 Print Street</p>
                                            <p className="text-sm">Design District, NY 10001</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-blue-400 mr-3" />
                                        <p className="text-sm">(555) 123-SIGN</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                                        <div className="text-sm">
                                            <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                                            <p>Sat: 9:00 AM - 4:00 PM</p>
                                            <p>Sun: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services */}
                            <div>
                                <h5 className="text-lg font-semibold mb-4 text-blue-500">Services</h5>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Custom Signs</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Vehicle Wraps</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Banners & Flags</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Business Cards</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Large Format Printing</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Digital Printing</a></li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h5 className="text-lg font-semibold mb-4 text-blue-500">Company</h5>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Our Portfolio</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Testimonials</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-gray-400 transition-colors">Contact</a></li>
                                </ul>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <h5 className="text-lg font-semibold mb-4 text-blue-500">Contact Us</h5>
                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        className="w-full px-3 py-2 text-sm rounded  border border-gray-700 focus:border-blue-500 focus:outline-none  placeholder-gray-400"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        className="w-full px-3 py-2 text-sm rounded border border-gray-700 focus:border-blue-500 focus:outline-none placeholder-gray-400"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Your Phone"
                                        className="w-full px-3 py-2 text-sm rounded border border-gray-700 focus:border-blue-500 focus:outline-none placeholder-gray-400"
                                    />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        rows="3"
                                        className="w-full px-3 py-2 text-sm rounded border border-gray-700 focus:border-blue-500 focus:outline-none placeholder-gray-400 resize-none"
                                    ></textarea>
                                    <button
                                        onClick={handleContactSubmit}
                                        className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm text-white font-semibold transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Social Media & Connect */}
                        <div className="border-t border-gray-800 pt-6">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="mb-4 md:mb-0">
                                    <h6 className="text-sm font-semibold mb-2">Connect with us</h6>
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-200">
                                            <i className="fab fa-facebook-f text-sm"></i>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-200">
                                            <i className="fab fa-instagram text-sm"></i>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-200">
                                            <i className="fab fa-twitter text-sm"></i>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-200">
                                            <i className="fab fa-linkedin-in text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500">
                                    © 2024 Fastrack Signs. All rights reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;