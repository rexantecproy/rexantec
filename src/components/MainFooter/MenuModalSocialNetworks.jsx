"use client";
import Link from "next/link";
import { HrComponent } from "../utilities/HrComponent";
import LINKS from '../../BBDD/SOCIALNETWORKS.json';
import { useState } from "react";

export default function ModalNetworks() {
    const [isOpenModalSocial, setIsOpenModalSocial] = useState(false);
    return (
        <div className={`md:hidden`} >
            <HrComponent color={"#075985"} height={3} />
            <div className="flex flex-col my-4 [&_a]:text-sm [&_a]:my-1">
                <span className="text-center text-sm" onClick={() => { setIsOpenModalSocial(!isOpenModalSocial)}}>REDES SOCIALES</span>
                <div className={`${isOpenModalSocial ? 'fixed inset-0 z-[100] bg-black/50' : 'hidden'}`} ></div>
                <div className={`${isOpenModalSocial ? 'flex' : 'hidden'} fixed inset-0 flex w-screen h-screen items-center justify-center z-[101] bg-black/0`}> 
                    <div className="w-auto h-auto flex flex-col bg-white rounded items-center [&_a]:py-3 [&_a]:px-2 [&_a]:w-56 [&_a]:text-center">
                        {
                            LINKS.map((socialink, i) => {
                                return (
                                socialink.name == 'Whatsapp'
                                ? 
                                <Link className="hover:text-sky-800 hover:border-2 hover:border-sky-800 hover:bg-sky-100" key={`${socialink}-/${i}`} href={"https://wa.me/5491158947428?text=Hola%20me%20llamo:%20%20%20%0A-%20%0A%0AQuiero%20realizar%20la%20consulta%20sobre%20(Problema%20técnico/Compra%20de%20equipo/Otro):%20%20%20%0A-%20%0A%0A¿Cuál%20es%20el%20presupuesto%20correspondiente?%0A-%20%0A%0A¡Gracias!. "}>Whatsapp</Link>
                                :
                                <Link className="hover:text-sky-800" key={`${socialink}-/${i}`} href={socialink.link}>{socialink.name}</Link>
                                )
                            })
                        }  
                        <span className="text-sky-950 hover:text-red-700 mt-5 mx-1 py-3 px-2 bg-sky-500 w-full text-center" onClick={() => { setIsOpenModalSocial(!isOpenModalSocial)}}>Cerrar</span>
                    </div>
                </div>
            </div>
        </div>
    )
};