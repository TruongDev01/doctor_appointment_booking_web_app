'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import GlobalAPI from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
export default function CategorySearch() {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategoryList();
    }, [])

    const getCategoryList = () => {
        // Fetch category list from API
        GlobalAPI.getCategory().then(
            (resp => {
                console.log(resp.data.data);
                setCategoryList(resp.data.data);
            })
        )
    }
    return (
        <div>
            <div className='mb-10 items-center px-5 flex flex-col gap-4' >
                <h2 className='text-4xl font-bold
                tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
                <h2 className='text-gray-500 text-xl'>Search Your Doctor and Book Appointment in one click</h2>
                <div className="flex w-full max-w-sm items-center gap-2 mt-3">
                    <Input type="text" placeholder="Search..." />
                    <Button type="submit" variant="outline">
                        <Search className='h-4 w-4 mr-2' />
                        Search
                    </Button>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5'>
                    {/* Category List */}
                    {categoryList.length > 0 ? categoryList.map((item, index) => index < 6 && (
                        <Link href={'/search/' + item.Name} key={item.id || index} className='flex
                     flex-col text-center items-center gap-2 p-5 bg-blue-50 m-2 rounded-lg
                     hover:scale-110 transition-all ease-in-out cursor-pointer'>
                            <Image src={item.Icon?.[0]?.url} alt='icon' width={40} height={40} />
                            <label className='text-blue-600 text-sm' >{item.Name}</label>
                        </Link>
                    ))
                        :
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className='h-[120px] w-[130px] bg-slate-200 rounded-lg animate-pulse m-2'>

                            </div>
                        ))

                    }
                </div>
            </div>
        </div >
    )
}
