import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RegisterNowForm from "./components/RegisterNowForm";
import Footer from "./components/Footer";

const Page = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <RegisterNowForm />
            <Footer />
        </>
    );
};

export default Page;
