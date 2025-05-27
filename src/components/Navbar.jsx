import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const services = [
        { name: 'Web Development', icon: 'fas fa-code' },
        { name: 'Mobile Apps', icon: 'fas fa-mobile-alt' },
        { name: 'UI/UX Design', icon: 'fas fa-pencil-ruler' },
        { name: 'Digital Marketing', icon: 'fas fa-bullhorn' },
        { name: 'SEO Optimization', icon: 'fas fa-search' },
        { name: 'Cloud Services', icon: 'fas fa-cloud' }
    ];

    return (
        <div className="bg-white">
            {/* Top Info Bar */}
            <div className="fixed z-50 inset-x-0 top-0 h-12 bg-white/90 shadow-sm backdrop-blur-md border-b border-s-4 border-white/20 ">
                <div className="container mx-auto flex justify-between items-center px-4 h-full text-sm text-gray-800">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-phone text-blue-600 text-xs"></i>
                            <a href="tel:+1(587) 744-0785" className="hover:text-blue-600 text-gray-500 transition-colors duration-200 font-medium underline">
                                (587) 744-0785
                            </a>
                        </div>
                        <span className='h-3.5 w-0.5 bg-gray-400'></span>
                        <div className="hidden sm:flex items-center space-x-2">
                            <i className="fas fa-envelope text-green-600 text-xs"></i>
                            <a href="mailto:info@company.com" className="hover:text-green-600 text-gray-500 transition-colors duration-200 font-medium underline">
                                info@company.com
                            </a>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="hidden md:flex items-center space-x-2">
                        <span className="text-gray-500 font-medium">Follow us:</span>
                        <div className="flex space-x-2">
                            {['facebook-f', 'instagram', 'twitter', 'linkedin-in'].map((icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-200">
                                    <i className={`fab fa-${icon} text-sm`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Separator */}
            <div className="fixed top-12 left-0 right-0 z-40 h-1 bg-gradient-to-r from-blue-100 via-white to-blue-100"></div>

            {/* Navbar */}
            <nav className="fixed z-[1000] top-[50px] backdrop-blur-md left-0 pb-2 w-full border-b bg-white/90 border-gray-200 shadow-sm">
                <div className="mx-auto container max-w-[1320px] h-[70px] px-5 flex justify-between items-center">
                    <a aria-label="logo" href="/">
                        <img
                            alt="logo"
                            loading="lazy"
                            width="131"
                            height="34"
                            decoding="async"
                            className="w-[130px]"
                            src={logo}
                            style={{ color: 'transparent' }}
                        />
                    </a>

                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
                            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>

                    <div className={`hamburger-menu ${menuOpen ? 'flex' : 'hidden'} lg:flex fixed lg:static top-[82px] left-0 w-full lg:w-fit h-[calc(100svh-82px)] lg:h-fit border-t lg:border-transparent border-gray-200 bg-gray-50 lg:bg-transparent flex-col lg:flex-row items-center overflow-y-auto duration-300`}>
                        <ul className="lg:absolute top-1/2 left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-full lg:w-fit lg:h-full py-8 lg:py-0 px-5 lg:px-0 flex flex-col lg:flex-row items-center lg:gap-10">
                            {['HOME', 'ABOUT US', 'SERVICES', 'CONTACT'].map((item, index) => (
                                <li key={index} className={`group relative w-full lg:w-fit h-fit lg:h-full ${item === 'SERVICES' ? 'dropdown' : ''}`}>
                                    <a
                                        href={`/${item.toLowerCase().replace(/ /g, '')}`}
                                        className="relative w-full lg:w-fit h-fit lg:h-full py-4 lg:py-0 border-b lg:border-b-0 border-dashed border-gray-200 lg:border-transparent flex justify-between items-center gap-2 text-sm font-medium tracking-[-0.14px] text-gray-700 hover:text-indigo-600 duration-200"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    {item === 'SERVICES' && (
                                        <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-50 shadow-xl rounded-md py-4 px-6 w-[600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                                            {services.map((service, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-800 bg-white hover:bg-indigo-50 px-3 py-2 rounded-md shadow-sm transition-all duration-200 cursor-pointer">
                                                    <i className={`${service.icon} text-gray-500`}></i>
                                                    <a href={`/services#${service.name.toLowerCase().replace(/ /g, '-')}`} className="block w-full text-gray-500 font-medium">
                                                        {service.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:flex">
                        <a
                            href="/quote"
                            className="group relative inline-flex items-center px-6 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-blue-300/50 active:scale-95"
                        >
                            <span className="relative z-10 text-white">GET A QUOTE!</span>
                            <span className="ml-3 relative flex items-center justify-center w-5 h-5 z-10">
                                <svg className="text-white w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 group-hover:animate-pulse"></div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
