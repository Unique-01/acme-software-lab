import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Contact: React.FC = () => {
    return (
        <div className="container">
            <div className="h-screen flex items-center justify-center">
                <div className="lg:w-3/4 shadow-xl p-10">
                    <div className="flex justify-center mb-5">
                        <h1 className=" text-blue-800 border-b-2 border-blue-800 text-lg font-bold">
                            CONTACT US
                        </h1>
                    </div>
                    <p>Leave us a message</p>
                    <div className="grid md:grid-cols-2 mt-5 gap-10">
                        <div>
                            <form action="" className="grid gap-4 ">
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    name="fullName"
                                    className="border rounded p-2 px-4 font-normal text-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    className="border rounded p-2 px-4 font-normal text-sm"
                                />
                                <textarea
                                    name="message"
                                    id=""
                                    placeholder="Your message"
                                    className="border rounded  p-4 font-normal text-sm"
                                    rows={5}></textarea>
                                <button className="bg-blue-800 text-white font-bold p-2 rounded">
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="font-normal">
                            <p className=" mb-5">
                                Ita Osun Junction 36, Ilode Street, Ile-Ife Osun
                                State, Nigeria.
                            </p>
                            <p className=" mb-3">+2348160469636</p>
                            <p className="">
                                officialacmesoftwarelab@gmail.com
                            </p>
                            <div className="flex gap-4 mt-2">
                                <a href=" ">
                                    <FaYoutube />
                                </a>
                                <a href=" ">
                                    <FaInstagram />
                                </a>
                                <a href=" ">
                                    <FaFacebookF />
                                </a>
                                <a href=" ">
                                    <FaTwitter />
                                </a>
                            </div>

                            <div className="mt-5">
                                <iframe
                                    title="Acme"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8381335792847!2d4.561789975880582!3d7.483119211266753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60baaa3a46570691%3A0x2d66a3159d3086c6!2sAcme%20Software%20Lab!5e0!3m2!1sen!2sng!4v1730304739080!5m2!1sen!2sng"
                                    width="348"
                                    height="155"
                                    loading="lazy"
                                    className="rounded-lg"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
