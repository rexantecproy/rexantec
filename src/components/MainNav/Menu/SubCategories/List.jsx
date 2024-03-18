import { useState } from 'react';
import Link from 'next/link.js';
import SubList from './SubList';

export default function List({ props, state }) {
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
    return <ul className={`flex flex-col w-full items-center z-auto justify-center [&>li]:text-sky-500 [&>li]:text-base [&>li]:py-2 [&>li]:px-6 [&>li]:text-center  ${isOpenSubMenu ? 'nth-1:mt-48' : 'nth-1:mt-0'} overflow-x-hidden overflow-y-auto touch-pan-y web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color select-none`}>
        {
            props.map((categorias, i) => {
                return <li key={`$ID-${i}-${categorias.name}`} className={`w-72 border-b-2 border-sky-500/0 hover:border-b-2 hover:border-sky-500 hover:text-sky-500 hover:bg-sky-100 cursor-pointer group/sub_list_1 `}>
                    {
                        categorias.name == 'Servicios' || categorias.name == 'Productos' || categorias.name == 'Institucional' //agregar rodas las pestañas con DROPDOWN
                            ?
                            (<span className={`${isOpenSubMenu ? 'h-36' : 'h-auto'} flex flex-col overflow-x-hidden overflow-y-auto touch-pan-y web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color`}>
                                <span className={`${isOpenSubMenu ? 'flex text-sky-500 border-b-4 border-sky-500' : ''}`} onClick={() => { setIsOpenSubMenu(!isOpenSubMenu) }}>{categorias.name}</span>

                                {
                                    <ul className={`mt-2 bg-sky-100/90 text-sky-500/90 flex-col text-start [&>li]:px-3 [&>li]:py-2 [&>li]:w-full w-full ${isOpenSubMenu ? '' : 'hidden'}`}>
                                        {
                                            categorias.list.map((sub_1, i) => {
                                                return (
                                                    <li key={`${sub_1}+-${i}`} className='text-xs border-b-2 border-sky-500/0 hover:border-b-2 hover:border-sky-500 hover:text-sky-500 bg-sky-100 cursor-pointer group-hover/sub_list_1:bg-sky-100/90'>

                                                        {
                                                            sub_1.sub_content_1.length > 0
                                                                ?
                                                                (
                                                                    <SubList props={sub_1} />
                                                                )
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
                            </span>)
                            :
                            (<Link href={categorias.linknav}>{categorias.name}</Link>)
                    }
                </li>
            })}
    </ul>
};