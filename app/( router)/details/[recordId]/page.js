"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

export default function Details({ params }) {
    const [doctor, setDoctor] = useState();
    useEffect(() => {
        getDoctorById();
    }, [])
    const getDoctorById = () => {
        GlobalApi.getDoctorById(params.recordId).then(resp => {
            setDoctor(resp.data.data);
        })
    }
    return (
        <div className='p-5 h-screen md:px-20'>
            <h2 className='font-bold text-[22px]'> Details</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='col-span-1'>
                    {doctor && <DoctorDetail doctor={doctor} />}
                </div>
                {/*Doctor Suggestion */}
                <div>
                    <DoctorSuggestionList />
                </div>
            </div>
        </div>
    )
}
