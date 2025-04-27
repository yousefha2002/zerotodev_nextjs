'use client';
import { useState } from 'react';
import Logo from './Logo';
import DesktopLinks from './DesktopLinks';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import LoginButton from './LoginButton';
import { projectName } from '@/utils/constants';
import categories from '@/data/categories';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Logo brandName={projectName} logoSrc={'/favicon.png'}/>
                <DesktopLinks navLinks={categories.map(category=>({title:category.title,href:category.href}))} />
                <LoginButton loginLink="/login" />
                <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            {isOpen&&<MobileMenu navLinks={categories.map(category=>({title:category.title,href:category.href}))}  loginLink="/login" />}
        </nav>
    );
}