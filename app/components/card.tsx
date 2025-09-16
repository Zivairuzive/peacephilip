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
                whileHover={{scale: 1.05,y: -5,transition: { duration: 0.2 }}}>
                <div className="h-fit w-72 bg-sky-900 text-white rounded py-3 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <motion.div className="flex items-center justify-center py-3"
                        whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                        <Image className="" src={props.image} width={70} height={70} alt=""/>
                    </motion.div>
                    <motion.div className="text-md flex justify-center py-2 font-bold"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}>
                        {props.header}
                    </motion.div>
                    <motion.div className="text-sm flex justify-center px-5 leading-7"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}>
                        <span>{props.subHead}</span>
                    </motion.div>
                </div>
            </HoverAnimation>
        </AnimatedContainer>
    );
}
