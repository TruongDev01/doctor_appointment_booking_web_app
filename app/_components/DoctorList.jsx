import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { forwardRef } from "react";

const DoctorList = forwardRef(({ doctorList, heading = "Popular Doctors" }, ref) => {
    return (
        <div ref={ref} className='mb-10 px-8'>
            <h2 className='font-bold text-xl '>{heading}</h2>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-4'>
                {doctorList.length > 0 ? doctorList.map((doctor, index) => (
                    <div key={doctor.id || index} className='border-[1px] rounded-lg p-3
                    cursor-pointer hover:border-primary
                    hover:shadow-sm transition-all ease-in-out'>
                        <Image src={doctor.image?.[0]?.url}
                            width={500}
                            height={200}
                            alt='doctor'
                            className='h-[200px] w-full object-cover rounded' />
                        <div className='mt-3 items-baseline flex flex-col gap-1'>
                            <h2 className='text-[10px] bg-blue-100 p-1 px-2 rounded-full text-primary'>{doctor.categories?.[0]?.Name}</h2>
                            <h2 className='font-bold text-lg mt-2' >{doctor.Name}</h2>
                            <h2 className='text-primary text-sm'>{doctor.Year_of_Experience}</h2>
                            <h2 className='text-sm text-gray-500' >{doctor.Address}</h2>
                            <Link href={'/details/' + doctor?.documentId} className='w-full'>
                                <h2 className='p-2 px-3 border-[1px] border-primary text-primary rounded-full
                            w-full text-center text-[11px] mt-2
                            cursor-pointer
                            hover:bg-primary hover:text-white'>Book Now</h2>
                            </Link>
                        </div>
                    </div>

                ))
                    :

                    [1, 2, 3, 4, 5, 6,].map((item, index) => (
                        <div key={index} className='h-[220px] w-full bg-slate-200 rounded-lg animate-pulse'>

                        </div>
                    ))

                    //Skeleton Loading

                }
            </div>
        </div>
    )
});
export default DoctorList;

