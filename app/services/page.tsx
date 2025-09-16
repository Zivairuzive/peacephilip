"use client";
import { usePathname } from "next/navigation";
import Banner from "../components/banner";
import Section from "../components/section";
import { useContext, useEffect } from "react";
import { pathContext } from "../context";
import { servicesPageData } from "../data/siteData";

export default function Services() {
    const { setPathValue } = useContext(pathContext);
    const _path = usePathname();

    useEffect(() => {
        setPathValue(_path);
    }, [setPathValue, _path]);

    return (
        <div>
            <div>
                <Banner
                    text={servicesPageData.banner.text}
                    url={servicesPageData.banner.url}
                    subtext={servicesPageData.banner.subtext}
                />
            </div>
            <div className="card">
                {servicesPageData.serviceSections.map((section, index) => (
                    <Section
                        key={index}
                        header={section.header}
                        text={section.text}
                        image={section.image}
                        background={section.background}
                        order={section.order}
                    />
                ))}
            </div>
        </div>
    );
}
