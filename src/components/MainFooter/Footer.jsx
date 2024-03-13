import Image from "next/image";
import { HrComponent } from "../utilities/HrComponent";

export default function Footer () {
    return (
        <div className="w-full flex justify-center text-sky-600 bg-gradient-to-t from-sky-50 from-10% via-sky-200 via-90% to-sky-400 to-100% select-none">
            <div className="flex flex-col w-3/5 justify-center">
                <div className="flex flex-row mt-10 mb-5 nth-4:mr-10 [&_ul]:ml-4 [&>ul]:h-52">
                    <ul className="flex flex-col w-2/12 items-center divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                        <Image src={"https://i.imgur.com/ZoO6k92.png"} width={80} height={80} />
                    </ul>
                    <ul className="flex flex-col w-2/12 nth-1:mb-2 [&>li]:py-1 [&>li]:text-xs nth-1:text-base divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                        <li>SERVICIOS</li>
                        <li>Carrier Services</li>
                        <li>Instaladores</li>
                        <li>Centro de Servicios</li>
                        <li>Piezas y Accesorios</li>
                        <li>Manuales</li>
                    </ul>
                    <ul className="flex flex-col w-2/12 nth-1:mb-2 [&>li]:py-1 [&>li]:text-xs nth-1:text-base divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                        <li>PRODUCTOS</li>
                        <li>Residenciales</li>
                        <li>Light Commercial</li>
                        <li>Commercial</li>
                        <li>Calderas</li>
                    </ul>
                    <ul className="flex flex-col nth-1:mb-2 nth-2:text-xs w-3/12 [&>li]:py-1 divide-x-reverse divide-x-2 divide-solid divide-sky-800">
                        <li>INSTITUCIONAL</li>
                        <li>Conocé sobre la historia de Carrier y la invención del Aire Acondicionado.</li>
                        <li>DISTRIBUIDORES</li>
                        <li>SERVICE OFICAL</li>
                        <li>POLÍTICA DE PRIVACIDAD</li>
                    </ul>
                    <ul className="w-4/12 text-end">
                        <li>ATENCIÓN AL CLIENTE</li>
                        <li className="my-2"><HrComponent color={"#075985"} height={3} /></li>
                        <li className="text-3xl mb-4 select-text">0810-222-7754</li>
                        <li className="text-sky-800">GARANTÍAS</li>
                        <li className="my-2"><HrComponent color={"#075985"} height={3} /></li>
                        <li className="text-2xl select-text">0-810-666-0557</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <HrComponent color={"#075985"} height={3} />
                    <p className="py-5">© Copyright | Rexantec 2024</p>
                </div>
            </div>
        </div>
    )
};