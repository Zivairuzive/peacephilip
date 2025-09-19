import Image from "next/image";
import { servicesPageData } from "../data/siteData";

import React from 'react';
import { Droplet,
    Grid, Waves,
    Wrench, Phone, Mail, 
    Layers,
    Zap,
    Paintbrush} from 'lucide-react';

const PlumbingServices = () => {
    const services = [
    {
        icon: <Grid className="w-16 h-16 mb-6" />,
        title: "Tiling",
        description: "We provide expert wall and floor tiling with precision finishes, ensuring durability and style for homes, offices, and commercial spaces.."
    },
    {
        icon: <Layers className="w-16 h-16 mb-6" />,
        title: "Ceiling Installation",
        description: "From PVC to suspended and gypsum ceilings, we install modern ceiling solutions that enhance both aesthetics and insulation."
    },
    {
        icon: <Droplet className="w-16 h-16 mb-6" />,
        title: "Plumbing",
        description: "Our plumbing services cover new installations, upgrades, and repairs, delivering reliable solutions for water supply and drainage systems.."
    },
    {
        icon: <Zap className="w-16 h-16 mb-6" />,
        title: "Electrical Works",
        description: "We offer safe, certified electrical services including wiring, lighting, installations, and maintenance for residential and commercial projects."
    },
    {
        icon: <Paintbrush className="w-16 h-16 mb-6" />,
        title: "Gamazini",
        description: "We apply high-quality Gamazini wall finishes that add strength, texture, and decorative appeal to both interior and exterior walls.."
    }
    ];

    return (
    <div className="min-h-screen bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Our services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of construction services.
            </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
            <div key={index}className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
                p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15 hover:shadow-2xl group">
                <div className="text-white/90 group-hover:text-white transition-colors duration-300 flex justify-center">
                {service.icon}
                </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                    {service.title}
                    </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                    {service.description}
                </p>
            </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white">
            Need any service above?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg
                hover:bg-blue-50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg flex items-center gap-3 min-w-[200px]">
                <Phone className="w-5 h-5" />
                Call Us Now
            </button>
            <button className="bg-green-900 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg flex items-center gap-3 min-w-[200px] border border-white/30">
                <Mail className="w-5 h-5" />
                Contact Us
            </button>
            </div>
            <p className="text-green-100 mt-6 text-lg">
            Available 24/7 for any construction services
            </p>
        </div>
        </div>
    </div>
    );
};

export default PlumbingServices;