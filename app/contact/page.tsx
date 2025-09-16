"use client";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactForm from "hydravex/app/components/contact";
import Banner from "hydravex/app/components/banner";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { pathContext } from "../context";
import { contactPageData, companyInfo } from "../data/siteData";

export default function Contact() {
    const _path = usePathname();
    const { setPathValue } = useContext(pathContext);
    useEffect(() => {
        setPathValue(_path);
    }, [setPathValue, _path]);
    return (
        <section className="z-1000 max-w-7xl m-auto">
            <div className="bg-gray-200 rounded">
                <Banner
                    url={contactPageData.banner.url}
                    text={contactPageData.banner.text}
                />
                <div className="grid sm:grid-cols-3 p-6 justify-between max-w-7xl text-center lg:px-8 py-20">
                    {contactPageData.contactInfo.map((info, index) => {
                        const IconComponent =
                            info.icon === "MapPinIcon"
                                ? MapPinIcon
                                : info.icon === "PhoneIcon"
                                ? PhoneIcon
                                : EnvelopeIcon;
                        return (
                            <div
                                key={index}
                                className={`basis-1/3 ${
                                    index === 1 ? "py-5 sm:py-0" : ""
                                }`}
                            >
                                <div className="flex sm:items-center">
                                    <IconComponent className="sm:w-20 w-10 hover:motion-safe:animate-bounce text-sky-900" />
                                    <div className={index === 1 ? "grow" : ""}>
                                        <h1
                                            className={`text-2xl font-bold ${
                                                index === 0
                                                    ? "sm:align-middle"
                                                    : ""
                                            }`}
                                        >
                                            {info.title}
                                        </h1>
                                        {info.content.map((item, itemIndex) => (
                                            <span
                                                key={itemIndex}
                                                className="pl-2"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <ContactForm />
            <div></div>
        </section>
    );
}
