import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-prose md:max-w-none">
                            <h2 className="text-4xl text-gray-900 sm:text-3xl font-bold">
                                Find & Book
                                <span className='text-primary' > Appointment</span> with your Fav
                                <span className='text-primary'> Doctors</span>
                            </h2>

                            <p className="mt-4 text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                                architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                                sequi.
                            </p>
                            <Button className='mt-10' >Explore now</Button>
                        </div>
                    </div>


                    <Image
                        alt="Doctor"
                        src="/doctor.jpg"
                        width={500}
                        height={500}
                        className="w-full rounded-lg shadow-lg sm:h-96 md:h-auto md:w-full lg:h-96"
                    />
                </div>
            </div>
        </section>



    )
}
