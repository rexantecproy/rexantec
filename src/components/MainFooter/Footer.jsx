import Image from "next/image";
import { HrComponent } from "../utilities/HrComponent";
import Link from "next/link";

export default function Footer () {
    return (
        <div className="w-full flex justify-center text-sky-600 bg-gradient-to-t from-sky-50 from-10% via-sky-200 via-90% to-sky-400 to-100% select-none">
            <div className="flex flex-col w-3/5 justify-center">
                <div className="flex flex-row mt-10 mb-5 nth-4:mr-10 [&_ul]:ml-4 [&>ul]:h-44">
                    <ul className="flex flex-col w-2/12 items-center divide-x-reverse divide-x-2 divide-solid divide-sky-800 non-draggable">
                        <Image src={"https://i.imgur.com/ZoO6k92.png"} width={100} height={100}/>
                    </ul>
                    <ul className="hidden md:flex flex-col w-2/12 nth-1:mb-2 nth-1:text-center [&>li]:py-1 [&>li]:text-xs nth-1:text-base divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                        <li>SERVICIOS</li>
                        <li>
                            <Link className='hover:font-semibold hover:text-sky-800' href={"mailto:consultas@rexantecservicios.com.ar"}>Services</Link>
                        </li>
                        <li>
                            <Link className='hover:font-semibold hover:text-sky-800' href={"mailto:reservas@rexantecservicios.com.ar"}>Instalaciones</Link>
                        </li>
                        <li>
                            <Link className='hover:font-semibold hover:text-sky-800' href={"mailto:informes@rexantecservicios.com.ar"}>Mantenimientos</Link>
                        </li>
                    </ul>
                    <ul className="hidden md:flex flex-col w-2/12 nth-1:mb-2 nth-1:text-center [&>li]:py-1 [&>li]:text-xs nth-1:text-base divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                        <li>PRODUCTOS</li>
                        <li>
                            <Link className='hover:font-semibold hover:text-sky-800' href={"/"}>Residencial</Link>
                        </li>
                        <li>
                            <Link className='hover:font-semibold hover:text-sky-800' href={"/"}>Comercial</Link>
                        </li>
                        <li>
                            <Link className='hover:font-semibold hover:text-sky-800' href={"/"}>Industrial</Link>
                        </li>
                        <li>
                            <Link className='hover:font-semibold hover:text-sky-800' href={"/"}>Calderas</Link>
                        </li>
                    </ul>
                    <ul className="hidden md:flex flex-col nth-1:mb-2 nth-1:text-center nth-2:text-xs w-3/12 [&>li]:py-1 divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                        <li>INSTITUCIONAL</li>
                        <li>
                            <Link className='hover:hover:text-sky-800' href={"/"}>&nbsp;&nbsp;Conocé sobre la historia de Rexantec en el mundo del Aire Acondicionado.</Link>
                        </li>
                    </ul>
                    <ul className="md:w-4/12 text-end">
                        <li>ATENCIÓN AL CLIENTE</li>
                        <li className="my-2"><HrComponent color={"#075985"} height={3} /></li>
                        <li className="md:text-xl mb-4 select-text">
                            <Link className='hover:text-sky-800' href={"tel:+541158947428"}>(+54) 9 1158947428</Link>
                        </li>
                        <li className="text-sky-800">COTIZACIONES</li>
                        <li className="my-2"><HrComponent color={"#075985"} height={3} /></li>
                        <li className="md:text-lg select-text">
                        <Link className='hover:text-sky-800' href={"tel:+541158947428"}>(+54) 9 1158947428</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <HrComponent color={"#075985"} height={3} />
                    <p className="pb-5 pt-2">© Copyright | Rexantec 2024</p>
                </div>
            </div>
        </div>
    )
};