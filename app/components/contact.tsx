'use client'
import { InquiryContext,ContactProps } from "../context"
import InputTag from "./input"
import { useState, useContext } from "react"
import { ArrowPathIcon, CheckIcon } from '@heroicons/react/24/outline';
var validator = require('validator');
import emailjs from '@emailjs/browser'
import { owner } from "../config";

type propsTypes = {
    message: string;
    result:boolean
}
interface RequestUpdate  {
    loading: (v:boolean)=>void;
    error: (e: string)=> void;
    _result: (r: string)=> void;
}

const sendEmail = (params:ContactProps, responseCallbacks: RequestUpdate)=>{
    emailjs.init({
        publicKey:'p7sSum-FCApjdFNTL'
    })

    type TemplateParamsProps = {
        owner:string;
        name: string;
        email: string; // where we sending the email to 
        from: string; // who is sending the email 
        subject: string; // email information 
        department: string // department of the person sending the email
        message: string // information about the query 
    }
    console.log(params.email, params)
    const templateParams: TemplateParamsProps = {
        owner: owner,
        name: params.name,
        from: params.email,
        ...params
    }

    emailjs.send(
        'service_g5fp19o','template_lltiloi',templateParams
    ).then(
        (response)=>{
            if (response.status == 200){
                responseCallbacks.loading(false)
                responseCallbacks.error('');
                responseCallbacks._result(response.text)
            }
        },
         (error)=>{
            responseCallbacks.error(error);
         }
        )

}
const SuccessSubmit = (props:propsTypes) =>{
    return (
        <>
        {props.result && (
            <div className="flex bg-white w-52 justify-center m-auto rounded-full py-1">
            <CheckIcon title="Success" className="w-6 text-green-900 font-semibold"/>
            <p className="px-2 grid place-content-center text-green-900 font-semibold">{props.message}</p>
        </div>
        )}
        </> )}

const ValidateContext = (cont: ContactProps)=>{
    for (let key in cont){
        if (cont[key]==''){
            return false;
        }
    }
    return validator.isEmail(cont.email);
}

export default function ContactForm(){
    const [message, setMessage] = useState('')
    const formContext = useContext(InquiryContext);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState('');
    const [result, setResult] = useState<string|null>(null);

    const MessageSubmit = async () => {
        formContext.message = message;
        const validForm = ValidateContext(formContext);
        if (validForm){
            setLoading(true);
            sendEmail(formContext, {
                loading:setLoading,
                error: setError,
                _result:setResult});
            setTimeout(() => {
                setResult(null);
            },2000);
        }
        else{
            setError('One or more field is not correctly field. Ensure the email field is valid')
        }
    }
    return (
        <>
        <div className="grid sm:grid-cols-2 grid-rows bg-sky-900 align-center mt-10 py-10 rounded-lg">
            <div className=" pl-5 text-white grid grid-cols-1 content-between sm:h-56 h-42">
                <div>
                    <p className="font-semibold sm:text-4xl text-xl mb-10 sm:mb-0 px-1">Have a project in mind? Lets Discuss</p>
                </div>
                <div className="">
                    <p className="sm:text-xl text-sm m-auto px-1">We are interested to hear from you.</p>
                    <p className="sm:text-xl text-sm">Fill the form on the right we will get in touch </p>
                </div>
            </div>
            <div className="">
                <div className="sm:flex">
                <InputTag context={InquiryContext}
                name='Name'
                />
                <InputTag name='Email' context={InquiryContext} />
                </div>
                <div className="sm:flex">
                <InputTag name='Subject' context={InquiryContext}/>
                <InputTag name='Department'context={InquiryContext}/>
                </div>
                <div className="p-5 justify-end">
                    <textarea onChange={(e)=>{setMessage(e.target.value)}} 
                    className="w-full h-40 rounded border p-2" placeholder="message"></textarea>
                </div>
                {Error &&(
                    <div className="bg-white w-52 m-auto rounded-lg px-2">
                        <p className="text-red-900 font-semibold text-xs flex justify-center rounded py-2">{Error}</p>
                    </div>
                )}
                <SuccessSubmit message="Successfull" result={result != null?true:false}/>

                <div className="p-5 grid justify-items-end ">
                    <button onClick={MessageSubmit}
                    disabled={Loading}
                    className="bg-sky-700 pl-3 pr-3 py-2 rounded-md text-white flex-end shadow-md hover:bg-sky-500">
                       {Loading?(
                        <div className="flex"><ArrowPathIcon title="Submitting" className="w-6"/> 
                        <p className="px-1">Loading</p>
                        </div>
                        ):
                        (<p>Submit</p> )
                        }
                    </button>
                </div>
               
            </div>
        </div>
         <div className="mt-10"></div>
        </>
    )
}