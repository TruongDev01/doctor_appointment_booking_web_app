"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function Header() {

    const Menu = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Explore",
            path: "/explore"
        },
        {
            id: 3,
            name: "Contact us",
            path: "/"
        }

    ]
    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div className='flex justify-between items-center p-4 shadow-sm' >
            <div className='flex items-center p-4 gap-10' >
                <Link href="/" className='cursor-pointer'><Image src="/logo.svg" alt="Logo" width={180} height={80} /></Link>
                <ul className="md:flex gap-8 hidden">
                    {Menu.map(item => (
                        <Link href={item.path} key={item.id}>
                            <li className="hover:text-primary
                            cursor-pointer hover:scale-105
                            transition-all ease-in-out">
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            {user ?

                <Popover>
                    <PopoverTrigger>
                        < Image src={user?.picture} alt='profile-image'
                            width={50}
                            height={50}
                            className='rounded-full' />
                    </PopoverTrigger>
                    <PopoverContent className="w-44">
                        <ul className='flex flex-col gap-2'>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md '><Link href={'/profile/'}>My Profile</Link></li>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md '>My booking</li>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md '><LogoutLink>Logout</LogoutLink></li>
                        </ul>
                    </PopoverContent>
                </Popover>
                //<LogoutLink>
                //  <Button variant="outline">Log out</Button>
                //</LogoutLink>
                :
                <LoginLink><Button >Get Started</Button></LoginLink>
            }



        </div>
    )
}
