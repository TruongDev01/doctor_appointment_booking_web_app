import React from 'react'
import CategoryList from './_components/CategoryList'

export default function layout({ children }) {
    return (
        <div className='grid grid-cols-4'>
            <div className='hidden md:block'>
                {/* Category Filter */}
                <CategoryList />
            </div>
            <div className='col-span-4 md:col-span-3'>
                {children}

            </div>
        </div>
    )
}
