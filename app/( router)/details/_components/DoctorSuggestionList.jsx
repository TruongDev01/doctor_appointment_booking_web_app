import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail';
import Image from 'next/image';
import Link from 'next/link';

export default function DoctorSuggestionList() {
    const [doctorList, setDoctorList] = useState([]);
    useEffect(() => {
        getDoctorList();
    }, [])
    const getDoctorList = () => {
        GlobalApi.getDoctorList().then(resp => {
            setDoctorList(resp.data.data);
        })
    }
    return (
        <div className='p-4 border-[1px] md:ml-5 '>
            <h2 className='mb-3 font-bold'>Suggestions</h2>

            {doctorList.map((doctor, index) => (
                <Link href={'/details/' + doctor?.documentId} className='w-full'>
                    <div className='mb-4 p-3 shadow-sm w-full
                cursor-pointer hover:bg-slate-100
                rounded-lg flex items-center gap-3' key={index}>
                        <Image src={doctor.image?.[0]?.url}
                            alt='image'
                            width={70}
                            height={70}
                            className='w-[70px] h-[70px] rounded-full' />
                        <div className='mt-3 flex-col flex gap-2'>
                            <h2 className='text-[10px] bg-slate-100 text-primary'>{doctor.categories?.[0]?.Name}</h2>
                            <h2 className='font-medium text-sm'>{doctor.Name}</h2>
                            <h2 className='text-primary text-sm'>{doctor.Year_of_Experience}</h2>
                        </div>

                    </div>
                </Link>
            )

            )}

        </div>
    )
}
