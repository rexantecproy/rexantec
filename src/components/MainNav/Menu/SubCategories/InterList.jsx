import { useState } from 'react';
import Link from 'next/link.js';
import SubList from './SubList';

export default function InterList({ props }) {
    const [isOpenIntMenu, setIsOpenIntMenu] = useState(false);
    return <span className={`${isOpenIntMenu ? 'h-52' : 'h-auto'} flex flex-col overflow-x-hidden overflow-y-auto touch-pan-y web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color`}>
        <span className={`${isOpenIntMenu ? 'flex text-sky-500 border-b-4 border-sky-500' : ''}`} onClick={() => { setIsOpenIntMenu(!isOpenIntMenu) }}>{props.name}</span>
        <ul className={`flex flex-col w-full items-center z-auto justify-center [&>li]:text-sky-500 [&>li]:text-base [&>li]:text-center overflow-x-hidden overflow-y-auto touch-pan-y web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color select-none`}>
            {
                <ul className={`bg-sky-100/90 text-sky-500/90 flex-col text-start [&>li]:px-3 [&>li]:py-2 nth-1:pt-4 [&>li]:w-full w-full h-48 ${isOpenIntMenu ? '' : 'hidden'}`}>
                    {
                        props.list.map((sub_1, i) => {
                            return (
                                <li key={`${sub_1.href}+-${i}`} className={`text-xs border-b-2 border-sky-500/0 hover:border-b-2 hover:border-sky-500 hover:text-sky-500 bg-sky-100`}>

                                    {
                                        sub_1.sub_content_1.length > 0
                                            ?
                                            <SubList props={sub_1} />                                            
                                            :
                                            (<Link href={sub_1.href}>
                                                {sub_1.name}
                                            </Link>)
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </ul>
    </span>
};