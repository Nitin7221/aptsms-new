import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="w-full bg-black text-white pt-10 pb-6 mt-8 shadow-inner">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-8">
                {/* Logo and copyright */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <img src="/images/logo.png" alt="APTSMS Logo" className="w-16 h-16 mb-2 rounded-full shadow-lg border-2 border-green-400 bg-white p-1" />
                    <span className="text-lg font-bold tracking-wide">APTSMS</span>
                    <span className="text-xs text-gray-300">Andhra Pradesh & Telangana Society for Mathematical Sciences</span>
                    <span className="text-xs text-gray-400 mt-2">&copy; {new Date().getFullYear()} APTSMS. All rights reserved.</span>
                </div>
                {/* Navigation links */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-6 text-sm font-medium">
                        <Link to="/about" className="hover:text-green-300 transition-colors" onClick={() => window.scrollTo(0, 0)}>About</Link>
                        <Link to="/contact" className="hover:text-green-300 transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                        <Link to="/events" className="hover:text-green-300 transition-colors" onClick={() => window.scrollTo(0, 0)}>Events</Link>
                        <Link to="/gallery" className="hover:text-green-300 transition-colors" onClick={() => window.scrollTo(0, 0)}>Gallery</Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
                Designed & Developed by APTSMS Web Team
            </div>
        </footer>
    );
}

export default Footer;