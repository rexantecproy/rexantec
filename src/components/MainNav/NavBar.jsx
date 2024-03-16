import LISTNAV from '../../BBDD/LISTNAV.json'
import ListNoSvg from './List/ListNoSvg.jsx';
import TitleLogo from '../Utilities/TitleLogo.jsx';
import Image from 'next/image.js';

export default function NavBar () {
    return <header className='divide-y-2 divide-y-reverse divide-sky-800/50 md:w-3/5 w-screen'>
        <div className='bg-white fixed w-3/5 h-14 hidden md:block z-[100]'></div>
        <nav className="py-2 px-10 h-auto md:h-20 flex items-center fixed top-0 md:top-10 w-screen md:w-3/5 justify-between bg-sky-100 z-[100]">
            <Image src={"https://i.imgur.com/ZoO6k92.png"} width={50} height={50} className='pointer-events-none select-none' alt='Logo NavBar'  />
            <TitleLogo component={'nav'} title={'Rexantec'} />
            <ListNoSvg props={LISTNAV} />
        </nav>
    </header>
};