import { 
    Facebook, Twitter,
    Instagram, Youtube,
    ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { companyName, seoData, telephone } from '../data/siteData';
import { CreateGoogleMapsUrl } from '../utils/map';
    

export default function CTAAndFooter() {
    const plumbingImages = [
        { id: 1, alt: "Living Room Walls", src: "/walling.jpg" },
        { id: 2, alt: "House Interior", src: "/housing.jpg" },
        { id: 3, alt: "housing_walls", src: "/walls.jpg" },
        { id: 4, alt: "durawall", src: "/durawall.jpg" },
        { id: 5, alt: "Bathroom tiling", src: "/bathroom.jpg" },
        { id: 6, alt: "Interior Painting", src: "/pavements.jpg"},]
    const address = seoData.structuredData.address;
    const locations = [
    {
        name: address.streetAddress,
        address: address.addressLocality,
        city: address.addressCountry
    },
    ];

    return (
    <div>
        {/* CTA Section */}
        <section className="bg-blue-600 py-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h2 className="text-white text-4xl md:text-5xl font-bold">
            Require Ceiling Installation?
            </h2>
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 whitespace-nowrap">
            Call Us  {telephone}
            </button>
        </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
                <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-bold text-sm">🔧</span>
                </div>
                <span className="text-xl font-bold text-gray-900">{companyName}</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                {}
                </p>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    <Youtube className="w-5 h-5" />
                </a>
                </div>
            </div>

            {/* Plumbing Images Grid */}
            <div>
                <div className="grid grid-cols-3 gap-2">
                {plumbingImages.map((image) => (
                    <div key={image.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image src={image.src} width={50} height={50} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"/>
                    </div>
                ))}
                </div>
            </div>

            {/* Locations */}
            <div>
                <div className="space-y-8">
                {locations.map((location, index) => (
                    <div key={index}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {location.name}
                    </h3>
                    <p className="text-gray-600 mb-1">{location.address}</p>
                    <p className="text-gray-600 mb-3">{location.city}</p>
                    <a href={CreateGoogleMapsUrl(location.address, location.city)} className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center transition-colors">
                        View on Google <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    </div>
                ))}
                </div>
            </div>
            </div>
            {/* Bottom Footer */}
            <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
                <span>{companyName}. All right reserved {new Date().getFullYear()}</span>
            </div>
            </div>
        </div>
        </footer>
    </div>
    );
    }