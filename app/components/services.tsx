import Image from "next/image";
import { servicesPageData } from "../data/siteData";

export default function ServiceCard() {
    return (
        <div className="services flex flex-wrap  justify-center">
            {servicesPageData.services.map((service, index) => (
                <div
                    className="h-84 w-80 bg-sky-900 m-5 py-5  rounded shadow-md"
                    key={index}
                >
                    <div className="flex justify-center">
                        <Image
                            alt=""
                            className="rounded"
                            src={service.image}
                            width={220}
                            height={200}
                        />
                    </div>
                    <div className="flex justify-center py-5 text-white font-bold">
                        {service.title}
                    </div>
                    <div className="text-white flex justify-center px-5">
                        <span>{service.description}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
