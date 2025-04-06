import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 py-25">
            <div className="md:w-4/7 flex justify-center">
                <img
                    src="/image/about-us.png"
                    alt="about us"
                    loading="lazy"
                    className="w-90 h-47 md:w-180 md:h-95"
                />
            </div>

            <div className="md:w-3/7 text-center md:text-right space-y-5 md:space-y-16">
                <h1 className="font-semibold text-[36px] md:text-[66px] leading-[66px] text-[#366585] font-inter">
                    من نحن
                </h1>
                <p className="font-normal text-[16px] sm:text-[20px] md:text-[28px] leading-8 text-[#366585] font-inter">
                    نظام اختبارات وتحليلات متكامل يساعد الأفراد والشركات على
                    اتخاذ قرارات توظيف مستنيرة عبر تقييم المهارات وتوفير رؤى
                    دقيقة لتحسين عملية التوظيف وبناء فرق عمل فعالة
                </p>
                <Link href={"/#register"}>
                    <button className="cursor-pointer text-lg px-5 py-2 md:px-8 md:py-3 bg-white border-3 border-[#366585] rounded-2xl text-[#366585] hover:bg-[#366585] hover:text-white transition w-[155px]">
                        سجل الان
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
