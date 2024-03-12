import LISTNAV from '../../BBDD/LISTNAV.json'
import ListNoSvg from './List/ListNoSvg.jsx';
//mport ListSvg from "./List/ListSvg.jsx";
import TitleLogo from '../Utilities/TitleLogo.jsx';
import Image from 'next/image.js';


export default function NavBar () {
    return <header className='divide-y-2 divide-y-reverse divide-sky-800 md:w-3/5 w-screen'>
        <nav className="py-2 px-10 h-auto md:h-20 flex items-center fixed top-0 md:top-10 w-screen md:w-3/5 justify-between bg-sky-600/10"> {/* aca le quito un z-[100] */}
            <Image src={"https://i.imgur.com/ZoO6k92.png"} width={50} height={50}/>
            <TitleLogo component={'nav'} title={'Rexantec'} />
            <ListNoSvg props={LISTNAV} />
           
            {/* <ListSvg /> */}
        </nav>
    </header>
};