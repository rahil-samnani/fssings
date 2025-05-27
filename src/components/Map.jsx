import React from 'react'

export default function Map() {
    return (
        <div>
            {/* Location Section */}
            <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light mb-4">
                        <span className="font-bold text-blue-600">Visit Our </span>
                        <span className="text-gray-800">Store</span>
                    </h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 mx-auto mb-8 rounded-full shadow-lg"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Come visit us at our Edmonton location or get directions to find us easily
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 items-start">
                        {/* Contact Information */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Store Information</h3>

                                <div className="space-y-6">
                                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                                        <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                123 Main Street<br />
                                                Edmonton, AB T5K 2M1<br />
                                                Canada
                                            </p>
                                        </div>
                                    </div>

                                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                                        <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                            <p className="text-gray-600">(780) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                                        <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                                            <div className="text-gray-600 space-y-1">
                                                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                                <p>Saturday: 9:00 AM - 4:00 PM</p>
                                                <p>Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 transform">
                                        Get Directions
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="lg:col-span-3">
                            <div
                                className="relative bg-white rounded-3xl p-2 shadow-2xl border border-gray-100 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 overflow-hidden group"
                                style={{ height: '640px' }}
                            >
                                {/* Map Container */}
                                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.0424765896205!2d-113.4938!3d53.5461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sDowntown%20Edmonton%2C%20Edmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-2xl"
                                        title="Fast Track Signs & Printing Location"
                                    ></iframe>

                                    {/* Overlay for interactive effects */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                                </div>

                                {/* Floating Info Card */}
                                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 max-w-xs transform hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm">Fast Track Signs & Printing</h4>
                                            <p className="text-gray-600 text-xs">Edmonton, AB</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Modern corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
