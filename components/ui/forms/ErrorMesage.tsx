import React from 'react'

export default function ErrorMessage({children}:{children:React.ReactNode}) {
    return (
        <p className='text-sm text-danger my-2'>{children}</p>
    )
}