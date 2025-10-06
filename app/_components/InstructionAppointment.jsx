"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function InstructionsAppointment({ scrollTargetRef }) {
    const handleScroll = () => {
        scrollTargetRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    const steps = [
        {
            title: "FIND A DOCTOR",
            description:
                "With more than 1000+ doctors and on mission to provide best care Health Care Service",
            icon: "/instruction1.png",
        },
        {
            title: "VIEW DOCTOR",
            description:
                "Share your health concern here and we shall assign you a top doctor across the North East",
            icon: "/instruction2.png",
        },
        {
            title: "BOOK A VISIT",
            description:
                "Book your time slot with doctor from your comfort zone",
            icon: "/instruction3.png",
        },
    ];

    return (
        <section className="bg-[#f6fafd] py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Tiêu đề */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Discover the Online Appointment!
                    </h2>
                    <p className="text-gray-500 mt-2">
                        A step-by-step guide to build an on-demand appointment for patients
                    </p>
                </div>

                {/* 3 card hướng dẫn */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
                        >
                            {/* Icon placeholder */}
                            <div className="h-24 flex items-center justify-center mb-4">
                                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                                    <Image
                                        src={step.icon}
                                        alt="icon"
                                        width={250}
                                        height={250} />
                                </div>
                            </div>

                            <h3 className="text-primary font-semibold text-lg mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm">{step.description}</p>

                            {/* Mũi tên giữa các card */}
                            {idx !== steps.length - 1 && (
                                <div className="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 
                  w-16 h-16 bg-white border rounded-full shadow 
                  items-center justify-center text-primary text-2xl leading-none text-center z-10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="rgb(59,130,246)"
                                        strokeWidth={2}
                                        className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

                {/* Nút CTA */}
                <div className="flex justify-center mt-10">
                    <Button onClick={handleScroll} className="bg-primary hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition text-center">
                        Find Doctor <span className="text-center">→
                        </span>

                    </Button>
                </div>
            </div>
        </section>
    );
}
