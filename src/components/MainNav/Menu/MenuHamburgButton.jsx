"use client";
import { Close, MenuIcon } from '../../../../public/img_svg/IconsUtilities.js';
import { useState } from 'react';
import List from './SubCategories/List.jsx';

export default function MenuHamburgButton({ props }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <>
            <ul className={`md:hidden basis-0 flex justify-center content-center cursor-pointer p-3 hover:rounded hover:border-sky-700 hover:bg-sky-100 hover:shadow-xl active:shadow-2xl ${isOpenMenu ? 'activeMenuHamburg' : ''} hover:text-red-800`}>
                <span onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                    {
                        isOpenMenu ? Close : MenuIcon
                    }
                </span>
            </ul>
            <nav className={`h-screen md:hidden bg-sky-500/0 w-screen fixed top-16 left-0 z-auto flex justify-center ${isOpenMenu ? '' : 'hidden'}`}>
                <div className='absolute z-[4] w-full h-full bg-sky-500/10' onClick={() => { setIsOpenMenu(!isOpenMenu) }}></div>
                <div className={`z-[5] absolute w-72 h-80 bg-sky-100/90 justify-center flex bg-border-black/0 border-b-4 border-sky-500 `}>
                    <List props={props} />
                </div>
            </nav>
        </>
    )
};