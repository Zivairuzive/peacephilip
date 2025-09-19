"use client";
import Image from "next/image";
import Section from "hydravex/app/components/section";
import Banner from "../components/banner";
import { useState, useEffect, useContext, useMemo } from "react";
import { pathContext } from "../context";
import { usePathname } from "next/navigation";
import SectionHeader from "../components/SectionHeader";
import Observer from "../components/observer";
import { aboutPageData } from "../data/siteData";
import {Wrench} from "lucide-react";

const cardData = {
    hero: {
        icon: Wrench,
        title: "Professional at Work",
        subtitle: "Expert plumbing solutions",
        buttonText: "Learn more about us",
        buttonIcon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round"strokeLinejoin="round" strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
        ),
    },
    content: {
        mainTitle: {
            line1: "Tiling solutions",
            line2: "tailored to your needs",
        },
        description: "Our team of licensed and experienced team is committed to providing prompt, professional, and courteous service, ensuring that your plumbing system is always in optimal condition.",
    },
    features: [
        {id: 1, text: "Experienced and certified team",},
        {id: 2, text: "High-quality materials and equipment",},
        {id: 3,text: "Customer satisfaction guarantee",},
    ],
    styling: {
        hero: {backgroundGradient: "from-gray-800 via-gray-700 to-gray-900",
            iconColor: "text-yellow-400", iconSize: "w-16 h-16",},
        decorative: {},
        button: {
            background: "bg-black bg-opacity-70",
            hover: "hover:bg-opacity-90", textColor: "text-white", padding: "px-6 py-3",
            borderRadius: "rounded-lg",
        },
        features: {
            iconBackground: "bg-green-600",iconSize: "w-8 h-8",
            textSize: "text-lg", textWeight: "font-semibold", textColor: "text-gray-800",},
    },
};

export default function About() {
    const _path = usePathname();
    const { setPathValue } = useContext(pathContext);

    useEffect(() => {
        setPathValue(_path);
    }, [setPathValue, _path]);

    return (
        <>
            <Banner {...aboutPageData.banner}/>
            <Section {...aboutPageData.vision} />
            {/* Start of Mission Statement */}
            <div className="py-16">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Image */}
                                <div className = "relative group">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105">
                                        <div className={`h-96 bg-gradient-to-br ${cardData.styling.hero.backgroundGradient} relative`}>
                                            {/* Simulated plumber working image */}
                                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-center text-white">
                                                    <Image src={"/walling.jpg"} height={500} width={500} alt="walling image peacephilip"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right Content */}
                                <div className="space-y-6">
                                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-300 hover:scale-105">
                                        {cardData.content.mainTitle.line1}
                                        <br />
                                        {cardData.content.mainTitle.line2}
                                    </h2>
            
                                    <p className="text-lg text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-800">
                                        {cardData.content.description}
                                    </p>
                                    <div className="space-y-4">
                                        {cardData.features.map((feature, _) => (
                                            <div  key={feature.id} className="flex items-center space-x-4 transition-all duration-300 hover:translate-x-2 hover:scale-105 group" >
                                                <div className={`${cardData.styling.features.iconSize} ${cardData.styling.features.iconBackground}
                                                rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule = "evenodd" />
                                                    </svg>
                                                </div>
                                                <span className={`${cardData.styling.features.textSize} ${cardData.styling.features.textWeight} ${cardData.styling.features.textColor} transition-all duration-300 group-hover:text-gray-900`}>
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            {/* End Mission Statement */}
            <Section {...aboutPageData.mission}/>
            <div className="py-5"/>
        </>
    );
}
