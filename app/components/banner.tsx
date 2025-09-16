"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { HoverAnimation } from "./animations";

type prop = {
    text: any;
    url: string;
    subtext?: string;
    height?: string;
    btn?: string;
    font?: string;
    custom?: boolean;
    mobile?: string;
};
export default function Banner(props: prop) {
    const _font = `${props.font ? props.font : "font-bold"}`;
    const _cuxtom = `${props.custom ? "" : "shadow-custom"}`;
    // const _bgurl = `${props.mobile?}`

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <div className={`banner grid h-[500px]`}>
                <div
                    className={`${props.url} rounded place-content-center
                bg-cover bg-center ${_cuxtom} transition duration-700 ease-in-out`}
                >
                    <motion.div
                        className="place-content-center text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <h1
                            className={`sm:text-4xl text-2xl px-3 sm:px-1 text-white ${_font} subpixel-antialiased
                        font-black`}
                        >
                            {props.text}
                        </h1>
                    </motion.div>
                    {props.subtext && (
                        <motion.div
                            className={`text-white font-black ${_font} leading-6 sm:mt-5 mt-10 text-center h-10`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <p>{props.subtext}</p>
                        </motion.div>
                    )}
                    {props.btn && (
                        <motion.div
                            className="sm:mt-5 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            <HoverAnimation
                                scale={1.05}
                                className="inline-block"
                            >
                                <Link href={"/contact"}>
                                    <button className="bg-sky-700 p-2 rounded transition duration-300 ease-in-out hover:bg-sky-800 shadow-lg hover:shadow-xl">
                                        <div className="flex items-center">
                                            <span
                                                className={`${_font} text-white`}
                                            >
                                                Contact us
                                            </span>
                                            <span className="ml-2">
                                                <EnvelopeIcon className="w-4 text-white" />
                                            </span>
                                        </div>
                                    </button>
                                </Link>
                            </HoverAnimation>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
