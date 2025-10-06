"use client"
import React, { useState, useEffect } from "react";
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiDownload, FiEdit } from "react-icons/fi";
import { BsGenderAmbiguous, BsGlobe2, BsTranslate, BsStarFill } from "react-icons/bs";
import { IoDocumentTextOutline, IoCarSportOutline } from "react-icons/io5";
import { MdAirlineSeatReclineNormal, MdLocationOn } from "react-icons/md";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { CgMail } from "react-icons/cg";

const Profile = () => {
    const formatDate = (dateValue) => {
        // 1. Chuyển string thành Date Object nếu cần
        const dateObject = dateValue instanceof Date
            ? dateValue
            : new Date(dateValue);

        // 2. Định dạng Date Object thành chuỗi có thể hiển thị
        return dateObject.toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };
    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user);
    }, [user])
    const [searchTerm, setSearchTerm] = useState("");
    const [date, setDate] = useState(new Date());
    const [reviews, setReviews] = useState([
        { id: 1, text: "Great service, very punctual", rating: 5, date: new Date() },
        { id: 2, text: "Safe and comfortable ride", rating: 4, date: new Date() }
    ]);

    const driverData = {
        role: "Booking User",
        avatar: "",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        joinDate: "March 2022",
        rating: 4.8,
        totalTrips: 1250,
        serviceArea: ["San Francisco", "Oakland", "San Jose"],
        fareDetails: {
            baseRate: "$2.50",
            perMile: "$1.25",
            perMinute: "$0.30",
            minimumFare: "$7.00"
        },
    };

    const statsData = {
        earnings: {
            series: [85],
            options: {
                chart: { height: 350, type: "radialBar" },
                plotOptions: { radialBar: { hollow: { size: "70%" } } },
                labels: ["Monthly Target"],
                colors: ["#3B82F6"]
            }
        },
        trips: {
            series: [{
                data: [30, 40, 45, 50, 49, 60]
            }],
            options: {
                chart: { type: "line" },
                stroke: { curve: "smooth" },
                colors: ["#3B82F6"]
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="relative">
                            <img
                                src={user?.picture}
                                alt={user?.name}
                                className="w-40 h-40 rounded-2xl object-cover shadow-md"
                            />
                            <div className="absolute -bottom-3 -right-3 bg-green-500 p-2 rounded-full text-white">
                                <span className="text-sm font-bold">{driverData.rating} ★</span>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold text-gray-800">{user?.given_name}</h1>
                            <p className="text-lg text-gray-600 mb-4">{driverData.role}</p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm">
                                    {driverData.totalTrips} Trips
                                </span>
                                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
                                    Verified Driver
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">User Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-4">
                            <CgMail className="text-blue-500 w-6 h-6" />
                            <div>
                                <p className="text-sm text-gray-500">Gmail</p>
                                <p className="text-gray-800">{user?.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MdAirlineSeatReclineNormal className="text-blue-500 w-6 h-6" />
                            <div>
                                <p className="text-sm text-gray-500">Seats</p>
                                <p className="text-gray-800">{ } Passengers</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FiMapPin className="text-blue-500 w-6 h-6" />
                            <div>
                                <p className="text-sm text-gray-500">Plate Number</p>
                                <p className="text-gray-800">{ }</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Fare Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {Object.entries(driverData.fareDetails).map(([key, value]) => (
                            <div key={key} className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                                <p className="text-xl font-semibold text-gray-800">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Service Area</h2>
                    <div className="flex flex-wrap gap-4">
                        {driverData.serviceArea.map((area, index) => (
                            <div key={index} className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                                <MdLocationOn className="text-blue-500 mr-2" />
                                <span className="text-blue-800">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Ratings & Reviews</h2>
                    <div className="space-y-4">
                        {reviews.map((review) => (
                            <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <BsStarFill
                                            key={i}
                                            className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-800">{review.text}</p>
                                <p className="text-sm text-gray-500 mt-2">{formatDate(review.date)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;