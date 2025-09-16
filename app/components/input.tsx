
import { useEffect, useRef, useContext, useState } from "react"

interface ContactProps{
    [name:string]:any;
    email:string;
    department:string;
    subject:string;
    message:string;

}

// function  getContactValue(contact:ContactProps, key: string):any{
//     return contact[key];
// }

type InputOptions = {
    name: string;
    required?: boolean;
    context: React.Context<ContactProps>
}
export default function InputTag(props:InputOptions){
    // const inputValue = useRef('');
    const contxt = useContext(props.context);
    const name:string = props.name.toLocaleLowerCase();
    const [inputValue, setInputValue] = useState('');

    useEffect(()=>{
        contxt[name] = inputValue;
    }, [contxt, name, inputValue])


    return (
        <div className="p-5">
            <label className="text-white text-xs sm:text-sm">{props.name}</label>
            <input required type={props.name.toLocaleLowerCase()}  
            onChange={(evt)=>{setInputValue(evt.target.value)}} 
            className="block w-full rounded border-0 h-12
            py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300
            placeholder:text-red-900 focus:ring-2 focus:ring-inset 
            focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-red-500"
            />
        </div>
    )
}