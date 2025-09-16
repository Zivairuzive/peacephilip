import Image from "next/image"

type Full = {
    url: string;
    head1:string;
    head2:string;
    subhead?:string;
}

export function FullSection(props:Full){


    return (
        <div className="h-[400px]">
            <div className={`${props.url} bg-no-repeat bg-cover bg-center shadow-custom
            hover:object-scale-down grid place-content-center bg-opacity-25 h-full`}>
                <div className="grid grid-rows px-5 sm:px-2">
                    <div className="place-content-center text-center">
                        <div>
                            <span className="text-xl text-white uppercase font-medium">{props.head1}</span>
                            <div className="py-5">
                                <h1 className="sm:text-4xl text-3xl font-medium uppercase text-white">
                                {props.head2}</h1>
                            </div>
                        </div>
                        <div className="text-white font-medium">
                            <div>
                                <p>{props.subhead}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}