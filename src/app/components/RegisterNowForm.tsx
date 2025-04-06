"use client";
import Image from "next/image";
import React, { useState } from "react";
import { formSchema } from "../utils/FormSchema";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type FormData = z.infer<typeof formSchema>;

const RegisterNowForm = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (
        data: FormData,
        event?: React.BaseSyntheticEvent
    ) => {
        if (event) event.preventDefault();

        setLoading(true);
        setMessage(null);

        const apiUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_API;

        if (!apiUrl) {
            setMessage("API URL is not defined.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setMessage("تم إرسال البيانات بنجاح!");
                reset();
            } else {
                setMessage("حدث خطأ أثناء إرسال البيانات.");
            }
        } catch {
            setMessage("حدث خطأ أثناء الاتصال بالخادم.");
        } finally {
            setLoading(false);
            setTimeout(() => setMessage(null), 5000);
        }
    };
    return (
        <div
            id="register"
            className="flex-row items-center justify-center max-w-[1240px] mx-auto px-18 py-24 md:px-4 md:py-12"
        >
            <div className="w-full text-center mb-6">
                <h1 className="font-bold text-[24px] md:text-[42px] text-[#366585] font-inter">
                    إنضم إلينا الان
                </h1>
                <p className="font-normal text-[12px] md:text-[20px] text-black font-inter">
                    سجل في حسابك
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full">
                <div className="hidden md:block w-full md:w-1/2 justify-center">
                    <Image
                        src="/image/burhan-register.svg"
                        alt="register now"
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-4 bg-[#DAECFD] shadow shadow-[#00000040] rounded-3xl p-6 md:shadow-none md:bg-white">
                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label
                            htmlFor="email"
                            className="block text-right font-normal text-[12px] md:text-[18px] text-[#366585] font-inter"
                        >
                            البريد الإلكتروني
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            id="email"
                            placeholder="أدخل البريد الإلكتروني"
                            className="block w-full px-4 py-2 border border-[#D1D5DB] bg-white rounded placeholder-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#366585] text-right"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-right text-[12px]">
                                {errors.email.message}
                            </p>
                        )}
                        <label
                            htmlFor="age"
                            className="block text-right font-normal text-[12px] md:text-[18px] text-[#366585] font-inter"
                        >
                            العمر
                        </label>
                        <input
                            {...register("age")}
                            type="text"
                            id="age"
                            placeholder="أدخل عمرك"
                            className="block w-full px-4 py-2 border border-[#D1D5DB] bg-white rounded placeholder-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#366585] text-right"
                        />
                        {errors.age && (
                            <p className="text-red-500 text-right text-[12px]">
                                {errors.age.message}
                            </p>
                        )}
                        <label
                            htmlFor="whatsapp"
                            className="block text-right font-normal text-[12px] md:text-[18px] text-[#366585] font-inter"
                        >
                            رقم الواتس اب
                        </label>
                        <input
                            {...register("whatsapp")}
                            type="text"
                            id="whatsapp"
                            placeholder="أدخل رقم الواتساب"
                            className="block w-full px-4 py-2 border border-[#D1D5DB] bg-white rounded placeholder-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#366585] text-right"
                        />
                        {errors.whatsapp && (
                            <p className="text-red-500 text-right text-[12px]">
                                {errors.whatsapp.message}
                            </p>
                        )}
                        <label
                            htmlFor="career"
                            className="block text-right font-normal text-[12px] md:text-[18px] text-[#366585] font-inter"
                        >
                            المهنة الحالية
                        </label>
                        <input
                            {...register("career")}
                            type="text"
                            id="career"
                            placeholder="أدخل مهنتك الحالية"
                            className="block w-full px-4 py-2 border border-[#D1D5DB] bg-white rounded placeholder-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#366585] text-right"
                        />
                        {errors.career && (
                            <p className="text-red-500 text-right text-[12px]">
                                {errors.career.message}
                            </p>
                        )}
                        <button
                            type="submit"
                            className={`${
                                loading
                                    ? "cursor-not-allowed"
                                    : "cursor-pointer"
                            } text-lg px-10 py-3 mt-10 bg-transparent border-3 border-[#366585] rounded-2xl text-[#366585] hover:bg-[#366585] hover:text-white transition w-[200px] mx-auto block`}
                        >
                            {loading ? "... جاري الإرسال" : "تسجيل"}
                        </button>
                        {message && (
                            <p
                                className={`text-center mt-4 ${
                                    message.includes("خطأ")
                                        ? "text-red-500"
                                        : "text-green-500"
                                }`}
                            >
                                {message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterNowForm;
