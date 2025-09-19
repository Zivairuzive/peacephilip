"use client"
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { faqData } from '../data/siteData';

export default function FAQComponent() {
    const [expandedQuestion, setExpandedQuestion] = useState(0);

    const toggleQuestion = (index: number) => {
        setExpandedQuestion(()=>expandedQuestion === index ? -1 : index);
    };

    const FaqArrowStyle = "w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300";

    return (
        <div className="mx-auto p-8 bg-white">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Header */}
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight transition-all duration-300 hover:scale-105">
                        Your questions,<br/> answered
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed transition-all duration-300 hover:text-gray-800">
                        Answers to the most common questions our customers have. If you do not find the information you are looking for, feel free to contact us.
                    </p>
                    <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Contact Us
                    </button>
                </div>

                {/* Right Column - FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index} 
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <button 
                                onClick={() => toggleQuestion(index)} 
                                className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-all duration-300 flex items-center justify-between group"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-gray-700">
                                    {item.question}
                                </span>
                                <div className={`transition-transform duration-300 ${expandedQuestion === index ? 'rotate-90' : 'rotate-0'}`}>
                                    {expandedQuestion === index ? (
                                        <ChevronDown className={FaqArrowStyle} />
                                    ) : (
                                        <ChevronRight className={FaqArrowStyle} />
                                    )}
                                </div>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    expandedQuestion === index 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-5 bg-gray-50">
                                    <p className="text-gray-700 leading-relaxed transition-all duration-300">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}