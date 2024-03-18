
import Link from 'next/link.js';
import InterList from './InterList';

export default function List({ props }) {
    return <ul className={`flex flex-col w-full items-center z-auto justify-center [&>li]:text-sky-500 [&>li]:text-base [&>li]:py-2 [&>li]:px-6 [&>li]:text-center overflow-x-hidden overflow-y-auto touch-pan-y web-scrollbar:scroll-color web-scrollbar-thumb:scroll-thumb-color select-none`}>
        {
            props.map((categorias, i) => {
                return <li key={`$ID-${i}-${categorias.name}`} className={`w-72 border-b-2 border-sky-500/0 hover:border-b-2 hover:border-sky-500 hover:text-sky-500 hover:bg-sky-100 cursor-pointer`}>
                    {
                        categorias.name == 'Servicios' || categorias.name == 'Productos' || categorias.name == 'Institucional' //agregar rodas las pestañas con DROPDOWN
                            ? //Aca se despligan las opciones
                            <InterList props={categorias} />
                            :
                            (<Link href={categorias.linknav}>{categorias.name}</Link>)
                    }
                </li>
            })}
    </ul>
};