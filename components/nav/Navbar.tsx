'use client';
import { useState } from 'react';
import Logo from './Logo';
import DesktopLinks from './DesktopLinks';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import { projectName } from '@/utils/constants';
import categories from '@/data/categories';
import AuthButton from './AuthButton';

export default function Navbar({token}:{token?:string}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Logo brandName={projectName} logoSrc={'/favicon.png'}/>
                <DesktopLinks navLinks={categories.map(category=>({title:category.title,href:category.href}))} />
                <AuthButton token={token}/>
                <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            {isOpen&&<MobileMenu token={token} navLinks={categories.map(category=>({title:category.title,href:category.href}))}  loginLink="/login" />}
        </nav>
    );
}