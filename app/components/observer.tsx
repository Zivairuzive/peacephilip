'use client'

import React, {useState, useRef, useEffect} from "react";
import {motion} from 'motion/react'

type ObserverXvalue = {
    initial: number;
    final: number;
}

export default function Observer(
    {children, duration, values}:Readonly<
    {children:React.ReactNode,
        duration:number, values?:ObserverXvalue}>)
    {
        const [visible, setVisible] = useState(false);
        const elemRef = useRef(null);

        useEffect(()=>{
            const observer = new IntersectionObserver(
                (entries)=>{
                    if(entries[0].isIntersecting){
                        setVisible(true);
                        observer.disconnect();
                    }
                }, {threshold: 0.1});
            if (elemRef.current){
                observer.observe(elemRef.current);

            }
        return ()=>{
            if(observer && observer.disconnect){
                observer.disconnect();
            }
        }
        }, [])

        return (
            <motion.div className=""
            ref={elemRef}
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: visible ? 1 : 0,
                x: visible ? (values? values.final:0) : (values? values.initial:-130)}}
            transition={{ duration: duration }}>
                {children}
            </motion.div>
        )
    }