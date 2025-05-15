import React from 'react'


export default function SuccessMessage({children}:{children:React.ReactNode}) {
    return (
        <p className='text-sm text-green-600 my-2'>{children}</p>
    )
}