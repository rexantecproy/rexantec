import Image from "next/image";
import { HrComponent } from "../utilities/HrComponent";
import Link from "next/link";

export default function Footer () {
    return (
        <div className="w-full flex justify-center text-sky-600 bg-gradient-to-t from-sky-50 from-10% via-sky-200 via-90% to-sky-400 to-100% select-none">
            <div className="flex flex-col w-3/5 justify-center">
                <div className="flex flex-row items-center md:items-start mt-10 mb-5 nth-4:mr-10 [&_ul]:ml-4 md:[&>ul]:h-44">
                    <ul className="flex flex-col md:w-2/12 items-center divide-x-reverse divide-x-2 divide-solid divide-sky-800 pointer-events-none">
                        <Image src={"https://i.imgur.com/ZoO6k92.png"} width={100} height={100} alt="Logo Footer"/>
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
                    <ul className="md:w-4/12 w-2/5 text-end md:text-base">
                        <li className="text-xs md:text-base">ATENCIÓN AL CLIENTE</li>
                        <li className="my-2"><HrComponent color={"#075985"} height={3} /></li>
                        <li className="md:text-xl text-sm mb-4 select-text">
                            <Link className='hover:text-sky-800' href={"tel:+541158947428"}>(+54) 9 1158947428</Link>
                        </li>
                        <li className="text-sky-800 text-xs md:text-base">COTIZACIONES</li>
                        <li className="my-2"><HrComponent color={"#075985"} height={3} /></li>
                        <li className="md:text-lg select-text">
                        <Link className='hover:text-sky-800' href={"tel:+541158947428"}>(+54) 9 1158947428</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">  
                    <HrComponent color={"#075985"} height={3} />  
                    <div className="flex flex-col my-4 md:hidden [&_a]:text-xs [&_a]:my-1">
                        <p className="text-center text-sm">REDES SOCIALES</p>
                        <Link className="hover:text-sky-800" href={"mailto:informes@rexantecservicios.com.ar"}>Email</Link>
                        <Link className="hover:text-sky-800" href={"https://www.facebook.com/profile.php?id=100083022592038 "}>Facebook</Link>
                        <Link className="hover:text-sky-800" href={"https://www.instagram.com/rexantec_servicios/"}>Instagram</Link>
                        <Link className="hover:text-sky-800" href={"https://www.tiktok.com/@rexantec?_t=8kjKop3NavG&_r=1"}>Tik Tok</Link>
                        <Link className="hover:text-sky-800" href={"https://wa.me/5491158947428?text=Hola%20me%20llamo:%20%20%20%0A%-%20%0A%0AQuiero%20realizar%20la%20consulta%20sobre%20(Problema%20técnico/Compra%20de%20equipo/Otro):%20%20%20%0A%-%20%0A%0A¿Cuál%20es%20el%20presupuesto%20correspondiente?%0A%-%20%0A%0A¡Gracias!. "}>Whatsapp</Link>
                    </div>  
                    <HrComponent color={"#075985"} height={3} />                   
                    <div className="flex flex-col md:flex-row w-full justify-between pb-5 pt-2 md:text-base text-xs">
                        <p>© Copyright | Rexantec 2024</p>
                        <p>Hecho por <Link href={'https//:wwww.google.com.ar'} className="hover:font-semibold hover:text-sky-800 pl-1 hover:pl-0.5">Maidana Iván</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
};