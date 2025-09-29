import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment';

export default function DoctorDetail({ doctor }) {
    const socialMedia = [
        {
            id: 1,
            icons: '/youtube.png',
            url: ''

        },
        {
            id: 2,
            icons: '/linkedln.jpg',
            url: ''
        },
        {
            id: 3,
            icons: '/twitter.jpg',
            url: ''

        },
        {
            id: 4,
            icons: '/facebook.jpg',
            url: ''

        }
    ]

    return (
        <>
            <div className='grid grid-cols-1 md:grid-col-3 border-[1px] p-5 mt-5 rounded-lg'>

                {/*Doctor image */}
                <div>
                    <Image src={doctor?.[0]?.image?.[0]?.url}
                        alt='Doctor'
                        width={200}
                        height={200}
                        className='rounded-lg w-full h-[280px] object-cover' />
                </div>
                {/*Doctor Info*/}
                <div className='col-span-2 mt-5 flex flex-col gap-3 items-baseline md:px-10 '>
                    <h2 className='font-bold text-2xl'>{doctor?.[0]?.Name}</h2>
                    <h2 className='flex gap-2 text-gray-500 text-md'>
                        <GraduationCap />
                        <span>{doctor?.[0]?.Year_of_Experience} of Experience</span>
                    </h2>
                    <h2 className='text-md flex gap-2 text-gray-500 '>
                        <MapPin />
                        <span>{doctor?.[0]?.Address}</span>
                    </h2>
                    <h2 className='text-[10px] bg-blue-100 p-1 px-2 rounded-full text-primary'>{doctor?.[0].categories?.[0]?.Name}</h2>
                    <BookAppointment doctor={doctor} />
                </div>
                {/*About Doctor*/}
                <div className='mt-5'>
                    <h2 className='font-bold text-[20px]'>About Me</h2>
                    <p className='text-gray-500 tracking-wide mt-2'>{doctor?.[0]?.About}</p>
                </div>
            </div>
        </>

    )
}
