import Image from "next/image";
import Observer from "./observer";
import { HoverAnimation, AnimatedContainer } from "./animations";
import { motion } from "motion/react";

type Tcard = {
    header: string;
    subHead: string;
    image: string;
};

export default function Card(props: Tcard) {
    return (
        <AnimatedContainer direction="up" duration={0.8} delay={0.1}>
            <HoverAnimation className="wrapper py-5 flex justify-center"
                scale={1.05}
                whileHover={{scale: 1.03,y: -6,transition: { duration: 0.25 },
                }}>
                <div className="h-fit w-80 rounded-2xl py-5 px-4 text-white backdrop-blur-md bg-gradient-to-b from-green-900/90 to-green-800/80 transition-all duration-300">
                    <motion.div className="flex items-center justify-center py-3"
                        whileHover={{ scale: 1.08, rotate: 3 }} transition={{ duration: 0.2 }}>
                        <div className="size-20 rounded-xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center shadow-inner">
                            <Image src={props.image} width={56} height={56} alt="card_image"/>
                        </div>
                    </motion.div>
                    <motion.div className="flex justify-center py-4 px-4 text-2xl font-medium tracking-wide"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.45 }}>
                        {props.header}
                    </motion.div>
                    <motion.div className="text-xl flex justify-center px-5 leading-7 text-sky-100/90"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.45 }}>
                        <span className="text-center">{props.subHead}</span>
                    </motion.div>
                </div>
            </HoverAnimation>
        </AnimatedContainer>
    );
}
