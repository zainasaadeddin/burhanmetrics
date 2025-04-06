import React from "react";
import { BsJoystick } from "react-icons/bs";
import { MdFollowTheSigns } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";

const Features = () => {
    const features = [
        {
            icon: (
                <BsJoystick className="text-[#366585] text-[45px] md:text-[90px]" />
            ),
            text: "تجربة سريعة وسهلة",
        },
        {
            icon: (
                <MdFollowTheSigns className="text-[#366585] text-[45px] md:text-[90px]" />
            ),
            text: "توصيات عملية لمستقبلك المهني",
        },
        {
            icon: (
                <TbChecklist className="text-[#366585] text-[45px] md:text-[90px]" />
            ),
            text: "اختبارات مبنية على أسس علمية",
        },
    ];

    return (
        <div className="text-center py-6 md:py-18 px-4 max-w-[1240px] mx-auto">
            <h2 className="font-bold text-[24px] md:text-[42px] text-[#366585] font-inter">
                لماذا تجرب برهان ؟
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="border border-[#DAECFD] p-6 md:p-8 flex flex-col items-center bg-white"
                    >
                        {feature.icon}
                        <p className="font-normal text-[16px] md:text-[32px] text-[#366585] font-inter mt-8 md:mt-12">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
