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

export default function About() {
    const _path = usePathname();
    const { setPathValue } = useContext(pathContext);

    useEffect(() => {
        setPathValue(_path);
    }, [setPathValue, _path]);

    // const urlLinks = ['hero1', 'hero2'];
    // const [currentUrl, setUrl] = useState(urlLinks[0]);
    // const intervalDuration = 3000;

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setUrl(prevImage => (prevImage === urlLinks[0] ? urlLinks[1] : urlLinks[0]));
    //     }, intervalDuration); // Change image every 3 seconds

    //     return () => clearInterval(interval); // Clear interval on component unmount
    //   });

    return (
        <>
            <Banner
                text={aboutPageData.banner.text}
                url={aboutPageData.banner.url}
            />
            <div className="max-w-7xl m-auto">
                <Section
                    header={aboutPageData.vision.header}
                    text={aboutPageData.vision.text}
                    image={aboutPageData.vision.image}
                    background={aboutPageData.vision.background}
                />
            </div>
            <SectionHeader header="Our Core Values" />
            <div className="grid sm:grid-cols-2 justify-items-center bg-white">
                <Observer duration={2.0}>
                    <div className="">
                        <Image
                            src={"/C.svg"}
                            className="object-cover"
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </Observer>
                <Observer duration={2.0} values={{ initial: 130, final: 0 }}>
                    <div className="">
                        <Image
                            src={"/H.svg"}
                            className="rounded"
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </Observer>
            </div>

            <Section
                header={aboutPageData.mission.header}
                subheading={aboutPageData.mission.subheading}
                text={aboutPageData.mission.text}
                background={aboutPageData.mission.background}
                image={aboutPageData.mission.image}
                order={aboutPageData.mission.order}
            />
            <SectionHeader header="More Core Values" />
            <div className="py-5"></div>
            {/* <Banner text='' url="bg-[url(/1.svg)]" custom={true}/> */}

            <div className="grid sm:grid-cols-2 justify-items-center bg-white">
                <Observer duration={2.0}>
                    <div className="rounded">
                        <Image
                            src={"/I.svg"}
                            className="rounded shadow-custom"
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </Observer>
                <Observer duration={2.0} values={{ initial: 130, final: 0 }}>
                    <div className="rounded">
                        <Image
                            src={"/S.svg"}
                            className="rounded"
                            alt=""
                            width={500}
                            height={500}
                        />
                    </div>
                </Observer>
            </div>
        </>
    );
}
