"use client";

import Image from "next/image";
import Observer from "./observer";
import { AnimatedContainer, StaggeredList } from "./animations";
import { motion } from "framer-motion";
type SectionProps = {
    header: string;
    text: string;
    btn?: string;
    image: string;
    order?: string;
    background: string;
    subheading?: string;
    lists?: string[];
};

export default function Section(props: SectionProps) {
    props.order ? props.order : "order-last";
    return (
        <div className={`${props.background}`}>
            <div className="sm:grid sm:grid-cols-2 py-10">
                <AnimatedContainer direction="left" duration={0.8} delay={0.2}>
                    <div className="">
                        <div className="place-content-center text-center py-5">
                            <motion.div
                                className="text-2xl sm:text-4xl font-bold py-5 text-sky-900"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <p className="py-2">
                                    <span>{props.header}</span>
                                </p>
                                {props.subheading && (
                                    <motion.div
                                        className="text-sm font-bold text-sky-900"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 0.5,
                                        }}
                                    >
                                        <p>
                                            <span>{props.subheading}</span>
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                            <motion.div
                                className="px-5 text-gray-900 text-md max-w-[500px] m-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <p className="text-left leading-6">
                                    {props.text}
                                </p>
                                {props.lists && (
                                    <StaggeredList
                                        className="list-disc place-content-left text-left pl-10 text-sm"
                                        direction="up"
                                    >
                                        {props.lists.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                className="leading-2 py-1 font-semibold text-gray-600"
                                                whileHover={{
                                                    x: 5,
                                                    color: "#0ea5e9",
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </StaggeredList>
                                )}
                            </motion.div>
                            {props.btn && (
                                <motion.div
                                    className="p-10"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <motion.button
                                        className="bg-sky-900 text-white p-5 py-3 rounded shadow-md hover:bg-sky-800 transition-colors duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {props.btn}
                                    </motion.button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </AnimatedContainer>
                <AnimatedContainer
                    direction="right"
                    duration={0.8}
                    delay={0.4}
                    className={`place-content-center flex ${props.order} justify-center align-center px-3`}
                >
                    <motion.div
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            src={props.image}
                            width={500}
                            height={500}
                            alt=""
                        />
                    </motion.div>
                </AnimatedContainer>
            </div>
        </div>
    );
}
