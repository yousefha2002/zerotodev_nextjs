import React from 'react'

export default function Shadow({children,className}:{children:React.ReactNode,className?:string}) {
    return (
        <div className={`p-6 rounded-sm shadow-lg ${className}`}>
            {children}
        </div>
    )
}
