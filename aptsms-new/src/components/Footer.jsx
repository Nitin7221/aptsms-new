import React from 'react';

function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-6 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
                <div className="text-center md:text-left text-sm">
                    &copy; {new Date().getFullYear()} APTSMS. All rights reserved.
                </div>
                <div className="flex gap-4 text-xs md:text-sm">
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/events" className="hover:underline">Events</a>
                    <a href="/gallery" className="hover:underline">Gallery</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;