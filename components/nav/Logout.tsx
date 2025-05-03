import { logout } from '@/actions/user/logout';
import React from 'react'

export default function LogoutButton() {
    return (
        <button 
            className='bg-primary text-white px-4 py-2 rounded-lg shadow'
            onClick={()=>logout()}
        >
            <span>الخروج</span>
        </button>
    )
}
