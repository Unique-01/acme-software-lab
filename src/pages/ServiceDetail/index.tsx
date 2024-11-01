import { useParams } from "react-router-dom";
import ServiceList from "./service.json";
import slugify from "react-slugify";
import { useEffect, useState } from "react";
import ServiceImg1 from "./assets/service1.jpeg";
import ServiceImg2 from "./assets/service2.jpeg";
import ServiceImg3 from "./assets/service3.jpeg";
import { FaArrowRight } from "react-icons/fa6";

interface ServiceProps {
    title?: string;
    description1?: string;
    description2?: string;
}

const ServiceDetail: React.FC = () => {
    const { serviceSlug } = useParams();
    const [service, setService] = useState<ServiceProps>();

    useEffect(() => {
        const service = ServiceList.find(
            (service) => slugify(service.title.toLowerCase()) === serviceSlug
        );

        setService(service);
    }, [serviceSlug]);

    if (!service) return <h1 className="text-center">Page Not Found</h1>;

    return (
        <div className="container py-10 pb-20">
            <div className="grid lg:grid-cols-2">
                <div>
                    <h1 className="capitalize text-blue-800 text-5xl font-bold mb-10 leading-[66px]">
                        {service?.title}
                    </h1>
                    <p className="font-normal text-xl text-gray-900 leading-10 tracking-wide pr-6">
                        {service?.description1}
                    </p>
                    <p className="font-normal text-xl text-gray-900 leading-10 tracking-wide pr-6 mt-5">
                        {service?.description2}
                    </p>
                    <div className="mt-16">
                        <button className="flex gap-4 bg-blue-800 items-center text-white p-5 px-8 rounded-xl font-bold">
                            Contact Us <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="bg-neutral-100 h-[752px] w-[450px] ms-10 rounded-lg relative">
                        <div className="absolute -right-10 -top-5">
                            <img
                                src={ServiceImg1}
                                alt=""
                                className="w-[376px] h-[246px] rounded-lg"
                            />
                        </div>
                        <div className="absolute -left-10 top-64">
                            <img
                                src={ServiceImg3}
                                alt=""
                                className="w-[376px] h-[246px] rounded-lg"
                            />
                        </div>
                        <div className="absolute -right-10 -bottom-5">
                            <img
                                src={ServiceImg2}
                                alt=""
                                className="w-[376px] h-[246px] rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
