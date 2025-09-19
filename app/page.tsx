"use client";

import Banner from "hydravex/app/components/banner";
import Section from "hydravex/app/components/section";
import SectionHeader from "./components/SectionHeader";
import Card from "./components/card";
import ServiceCard from "./components/services";
import { FullSection } from "./components/full";
import { pathContext } from "./context";
import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import Observer from "./components/observer";
import { StaggeredList } from "./components/animations";
import {
    QuestionMarkCircleIcon,
    ArrowDownRightIcon,
} from "@heroicons/react/24/outline";
import { homePageData } from "./data/siteData";
import PlumbingLandingPage from "./components/landing";
import CardInformation from "./components/CardInfo";
import FAQComponent from "./components/faq";


// Using data from central data file
const { banner, aboutMinor, subhead,
    cardDetails, strategy, fullSection } = homePageData;

export default function Home() {
    const { setPathValue } = useContext(pathContext);
    const path = usePathname();

    useEffect(() => {
        setPathValue(path);
    }, [setPathValue, path]);

    return (
        <main className="m-auto">
            <PlumbingLandingPage/>
            <CardInformation/>
            {/* <Section {... aboutMinor} image={"/working.webp"} order="order-last" background="bg-gray-100"/> */}
            {/* <Section {...strategy}/> */}
            <SectionHeader header="Why Choose Us" icon="question" />
            <StaggeredList className="sm:grid sm:grid-cols-4 place-content-center sm:gap-4" direction ="up" staggerDelay = {0.2}>
                {cardDetails.map((card, index) => (<Card key={index} {...card}/>))}
            </StaggeredList>
            <Observer duration={2.0}>
                <div className="mt-5"><Banner {... banner.cta}/></div>
            </Observer>
            <ServiceCard />
            <Observer duration={2.0}>
                <FullSection {...fullSection}/>
            </Observer>
            <FAQComponent/>
        </main>
    );
}
