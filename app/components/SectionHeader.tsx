import { QuestionMarkCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"
import React from "react"

type SectionHeader = {
    header:string;
    style?:string;
    icon?:string;

}

export default function SectionHeader(props:SectionHeader){
    return (
        <div className={`${props.style} place-content-center align-center
        flex py-5 bg-white font-bold text-sky-900 mt-5 rounded`}>
            {props.icon === 'question'&& <span><QuestionMarkCircleIcon className="w-12"/></span>}
            {props.icon === 'service'&& <span><Cog6ToothIcon className="w-12"/></span>}
        <div className="grid">
            <span className="text-2xl uppercase text-center place-content-center">{props.header}</span>
        </div>
    </div>
    )
}