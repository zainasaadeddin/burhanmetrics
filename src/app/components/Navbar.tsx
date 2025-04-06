import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 pt-12 text-black">
            <div className="order-2">
                <a href="#">
                    <img
                        src="/image/burhan-logo.png"
                        alt="logo"
                        loading="lazy"
                        className="w-33 h-17 md:w-43 md:h-21"
                    />
                </a>
            </div>

            <ul className="hidden md:flex order-1 space-x-8">
                <button
                    className="bg-[#DAECFD66] text-lg text-[#36658566] px-8 py-3 rounded-2xl w-[155px]"
                    disabled
                >
                    حساب جديد
                </button>
                <Link href={"/#register"}>
                    <button className="cursor-pointer text-lg px-8 py-3 bg-white border-3 border-[#366585] rounded-2xl text-[#366585] hover:bg-[#366585] hover:text-white transition w-[155px]">
                        سجل الان
                    </button>
                </Link>
            </ul>
            <MobileMenu />
        </div>
    );
};

export default Navbar;
