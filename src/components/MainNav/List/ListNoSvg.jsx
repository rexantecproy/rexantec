import GlobalList from '@/components/MainNav/DropDown/DropDownList';
import Link from 'next/link';
import MenuHamburgButton from '../Menu/MenuHamburgButton';

export default function ListNoSvg({ props }) {
    return <>
        <ul className="z-[-1] md:z-auto md:static absolute bg-transparent w-full left-0 py-4 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 md:flex md:flex-grow md:justify-center basis-0 md:text-sm md:[&>li>a]:inline-block md:[&>li>a]:p-2 [&>li>a]:text-sky-100 select-none nth-7:hidden">
            {
                props.map((categorias, i) => {
                    return (
                        categorias.name == 'Catálogo' ?
                            (<GlobalList key={`$ID-${i}DROP`} sub={categorias.list} title={categorias.name} />)
                            :
                            (<li key={`$ID-${i}`} className='border border-transparent bg-sky-600 mx-1 box-border hover:border hover:border-lime-600 rounded-md [&>a]:activate:bg-sky-500 hover:bg-lime-500 hover:shadow-xl active:shadow-2xl'>
                                <Link href={categorias.linknav}>{categorias.name}</Link>
                            </li>)
                    )
                })
            }
        </ul>
        <MenuHamburgButton props={props} />
    </>
};