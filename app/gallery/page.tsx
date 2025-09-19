"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronUp, Heart, Share2, Eye } from "lucide-react";
import Image from "next/image";

const AnimatedGallery = () => {
    const [scrollY, setScrollY] = useState(0);
    const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
    const [showScrollTop, setShowScrollTop] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Sample gallery data with high-quality placeholder images
    const galleryItems = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            title: "Mountain Vista",
            category: "Nature",
            likes: 124,
            views: 1520,
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
            title: "Misty Forest",
            category: "Nature",
            likes: 98,
            views: 890,
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
            title: "City Lights",
            category: "Urban",
            likes: 156,
            views: 2340,
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
            title: "Wild Path",
            category: "Nature",
            likes: 87,
            views: 1120,
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            title: "Ocean Waves",
            category: "Nature",
            likes: 203,
            views: 3450,
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
            title: "Desert Sunset",
            category: "Landscape",
            likes: 167,
            views: 2890,
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
            title: "Lakeside Reflection",
            category: "Nature",
            likes: 142,
            views: 1980,
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            title: "Alpine Adventure",
            category: "Adventure",
            likes: 189,
            views: 2760,
        },
    ];

    // Handle scroll for parallax and show/hide scroll-to-top
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Intersection observer for fade-in animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        const id = target.dataset.id;
                        if (id) {
                            setVisibleItems((prev) => new Set([...prev, id]));
                        }
                    }
                });
            },
            { threshold: 0.1, rootMargin: "50px" }
        );
        observerRef.current = observer;

        const elements = document.querySelectorAll(
            "[data-animate]"
        ) as NodeListOf<HTMLElement>;
        elements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-900 to-green-900">
            {/* Gallery Section */}
            <div className="relative z-10 px-4 py-20 bg-gradient-to-b from-transparent to-green-900/50">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="text-center mb-16"
                        data-animate
                        data-id="gallery-title"
                    >
                        <h2
                            className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
                                visibleItems.has("gallery-title")
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            }`}
                        >
                            Featured Gallery
                        </h2>
                        <div
                            className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto transition-all duration-1000 delay-300 ${
                                visibleItems.has("gallery-title")
                                    ? "opacity-100 scale-x-100"
                                    : "opacity-0 scale-x-0"
                            }`}
                        />
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.id}
                                data-animate
                                data-id={`item-${item.id}`}
                                className={`group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 transition-all duration-700 hover:scale-105 hover:border-purple-400/50 ${
                                    visibleItems.has(`item-${item.id}`)
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-20"
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Image Container */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        priority={index < 4}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20">
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                                            <Heart className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center gap-1">
                                                <Heart className="w-4 h-4" />
                                                {item.likes}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Eye className="w-4 h-4" />
                                                {item.views}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/30 rounded-2xl transition-colors duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
                    showScrollTop
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            >
                <ChevronUp className="w-6 h-6" />
            </button>
        </div>
    );
};

export default AnimatedGallery;
