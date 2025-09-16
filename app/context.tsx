'use client'
import React, { ReactNode, createContext, useState } from "react";
import { usePathname } from "next/navigation";

interface MyProviderProps {
    children:ReactNode;
}
export interface ContactProps{
    [name:string]:any;
    email:string;
    department:string;
    subject:string;
    message:string;

}

const EmptyString = '';

const _default: ContactProps ={
    name:EmptyString,
    email:EmptyString,
    department:EmptyString,
    subject:EmptyString,
    message:EmptyString
}

export const InquiryContext:React.Context<ContactProps> = createContext(_default)

export const InquiryProvider:React.FC<MyProviderProps> = ({children})=>{
    return  (
        <InquiryContext.Provider value = {{email:'', name: '',subject:'',department:'',message:''}}>
            children
        </InquiryContext.Provider>
    )
}


export const pathContext = createContext({
    pathValue:'', setPathValue: (value:string)=>{}
});


export const PathProvider:React.FC<MyProviderProps> = ({children})=>{
    const _pathValue = usePathname();
    const [pathValue, setPathValue] = useState(_pathValue);

    return (
        <pathContext.Provider value = {{pathValue, setPathValue}}>
            {children}
        </pathContext.Provider>
    )

}