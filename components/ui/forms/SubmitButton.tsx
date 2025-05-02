import React, { ReactNode } from 'react'

export default function SubmitButton({isPending,children,onClick}:{isPending:boolean,children:ReactNode,onClick?:()=>void}) {
    return (
        <button
        onClick={onClick}
        disabled={isPending}
        type="submit"
        className="w-full py-2 bg-primary text-white rounded-md"
        >
            {!isPending?children:"...."}
        </button>
    )
}
