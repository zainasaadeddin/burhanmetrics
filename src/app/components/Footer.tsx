import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";
import { ResourceLinks } from "../utils/ResourceLinks";

const Footer = () => {
    const footerLinks = [
        {
            icon: <FaLinkedinIn size={16} />,
            link: ResourceLinks.linkedInLink,
        },
        {
            icon: <FaFacebookF size={16} />,
            link: ResourceLinks.facebookLink,
        },
        {
            icon: <FaTwitter size={16} />,
            link: ResourceLinks.twitterLink,
        },
        {
            icon: <FaInstagram size={16} />,
            link: ResourceLinks.instagramLink,
        },
        {
            icon: <FaYoutube size={16} />,
            link: ResourceLinks.youtubeLink,
        },
    ];
    return (
        <footer className="bg-[#DAECFD] py-4 px-6  ">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4">
                <div className="flex space-x-4">
                    {footerLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            className="bg-[#2c5c7e] text-white p-2 rounded-full"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                <p className="text-sm text-[#0A142F] text-center">
                    © {new Date().getFullYear()} All rights reserved
                </p>

                <div className="flex items-center justify-center">
                    <a href="#">
                        <img
                            src="/image/burhan-logo.png"
                            alt="Burhan Metrics Logo"
                            className="w-30 md:w-38 md:h-19 cursor-pointer"
                        />
                    </a>
                </div>
            </div>
            <hr className="border-t border-[#2c5c7e] my-4" />

            <div className="text-center text-sm text-[#0A142F] pb-2">
                Powered by{" "}
                <a
                    href={ResourceLinks.oppoTrainLink}
                    target="_blank"
                    className="font-semibold hover:text-[#2c5c7e]"
                >
                    OppoTrain
                </a>
                . Designed by{" "}
                <a
                    href={ResourceLinks.zahaaMuhannaLinkedIn}
                    target="_blank"
                    className="font-semibold hover:text-[#2c5c7e]"
                >
                    Zahaa Muhanna
                </a>
            </div>
        </footer>
    );
};

export default Footer;
