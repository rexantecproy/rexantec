import Image from "next/image";
import Link from "next/link";
import LISTNAV2 from '../../BBDD/LISTNAV';
import EMAILS from '../../BBDD/EMAILS';

export default function ListPlus() {
    return (
        <div className="flex flex-row items-center md:items-start mt-10 mb-5 nth-4:mr-10 [&_ul]:ml-4 md:[&>ul]:h-44 h-60">
            <ul className="flex flex-col md:w-2/12 items-center pointer-events-none">
                <Image src={"https://i.imgur.com/ZoO6k92.png"} width={100} height={100} alt="Logo Footer" />
            </ul>
            <ul className="hidden md:flex flex-col w-2/12 nth-1:mb-2 nth-1:text-center [&>li]:py-1 [&>li]:text-xs nth-1:text-base divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                <li>{LISTNAV2[0].name.toUpperCase()}</li>
                {
                    EMAILS.map((email, i) => {
                        return  (i < 3
                        ?
                        <li key={`${email}+-${i}`}>
                            <Link key={`${email}+-${i}`} className='hover:font-semibold hover:text-sky-800' href={EMAILS[i].link}>{EMAILS[i].name}</Link>
                        </li>
                        : 
                        "")
                    })
                }
            </ul>
            <ul className="hidden md:flex flex-col w-2/12 nth-1:mb-2 nth-1:text-center [&>li]:py-1 [&>li]:text-xs nth-1:text-base divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                <li>{LISTNAV2[1].name.toUpperCase()}</li>
                {
                    LISTNAV2[1].list.map((listNav, i) => {
                        return (<li key={`${listNav}--${i}Ñ`}>
                            <Link key={`${listNav}--${i}Ñ`} className={`hover:font-semibold hover:text-sky-800`} href={listNav.href}>{`${listNav.name.charAt(0).toUpperCase()}${listNav.name.slice(1).toLowerCase()}`}</Link>
                        </li>)
                    })
                }
            </ul>
            <ul className="hidden md:flex flex-col nth-1:mb-2 nth-1:text-center nth-2:text-xs w-3/12 [&>li]:py-1 divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                <li>{LISTNAV2[2].name.toUpperCase()}</li>
                <li>
                    <Link className='hover:hover:text-sky-800' href={LISTNAV2[1].list[0].href}>&nbsp;&nbsp;Conocé sobre la historia de Rexantec en el mundo del Aire Acondicionado.</Link>
                </li>
            </ul>
            <ul className="md:w-4/12 w-2/5 text-end">
                <li className="text-xs md:text-base">ATENCIÓN AL CLIENTE</li>
                <li className="my-2"><hr className="bg-sky-800 h-[3px]" /></li>
                <li className="md:text-xl text-sm mb-4 select-text">
                    <Link className='hover:text-sky-800' href={"tel:+541158947428"}>(+54) 9 1158947428</Link>
                </li>
                <li className="text-sky-800 text-xs md:text-base">COTIZACIONES</li>
                <li className="my-2"><hr className="bg-sky-800 h-[3px]" /></li>
                <li className="md:text-lg select-text">
                    <Link className='hover:text-sky-800' href={"tel:+541158947428"}>(+54) 9 1158947428</Link>
                </li>
            </ul>
        </div>
    )
};