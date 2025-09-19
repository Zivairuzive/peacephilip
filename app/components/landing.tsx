import React from "react";
import { Wrench, Star, Phone } from "lucide-react";
import Image from "next/image";
import { LandingNavigation } from "./navlink";

// Data objects for content

const featureCards = [
    {
        id: 1,
        icon: Wrench,
        title: "Expert Repairs",
        description:"Professional construction repairs with guaranteed quality workmanship.",
    },
    {
        id: 2,
        icon: Phone,
        title: "24/7 Support",
        description: "Our Emergency services are available around the clock.",
    },
    {
        id: 3,
        icon: Star,
        title: "Top Rated",
        description:"Highly rated by over 200+ satisfied customers in North West, Mafikeng.",
    },
];

// Styling constants
const styles = {
    buttonLarge:"bg-green-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-yellow-300 transition-all transform hover:scale-105",
    iconContainer:"w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center",
    featureCard: "p-6",
};

// Reusable components
const StarRating = ({ count = 5, className = "w-4 h-4" }) => (
    <div className="flex items-center space-x-1">
        {[...Array(count)].map((_, i) => (
            <Star key={i}className={`${className} fill-yellow-400 text-yellow-400`}/>
        ))}
    </div>
);

interface FeatureCardProps {
    feature: {
        id: number;
        icon: React.ComponentType<{ className?: string }>;
        title: string;
        description: string;
    };
}

const FeatureCard = ({ feature }: FeatureCardProps) => (
    <div className={styles.featureCard}>
        <div className={styles.iconContainer}>
            <feature.icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
    </div>
);

const PlumbingLandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-700 to-green-800">
            {/* Navigation */}
            <LandingNavigation />
            {/* Hero Section */}
            <div className="px-4 py-12 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-white">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                                Your trusted <br />
                                <span className="text-red-400">
                                    construction solutions
                                </span><br />
                                in North West, Mafikeng
                            </h1>

                            <p className="text-lg lg:text-xl mb-8 text-blue-100 leading-relaxed">
                                At PeacePhilip, we specialize in tailing, ceiling installation, electrical works 
                                and Gamazini wall finishes - creating spaces that reflect durability and modern design
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <button className={styles.buttonLarge}>
                                    Discover our services
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Professional Image */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-green-300 to-blue-700 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="rounded-2xl p-8 -rotate-3">
                                    <div className="w-full h-80 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center relative overflow-hidden">
                                        {/* Simulated professional plumber */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600 to-transparent opacity-50"></div>
                                        <div className="relative z-10 text-center">
                                            <Image src={"/home_tiles_photo.jpg"} width={500} height={500} alt="home photo"/>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
                                        <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-300 rounded-full opacity-30"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional sections can be added here */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        {featureCards.map((feature) => (
                            <FeatureCard key={feature.id} feature={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlumbingLandingPage;
