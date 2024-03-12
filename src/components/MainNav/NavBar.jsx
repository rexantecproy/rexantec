import LISTNAV from '@/BBDD/LISTNAV.json'
//import Contact from './Contact.jsx';
import ListNoSvg from './List/ListNoSvg.jsx';
//mport ListSvg from "./List/ListSvg.jsx";
import TitleLogo from '../Utilities/TitleLogo.jsx';


export default function NavBar () {
    return <header className='divide-y-2 divide-y-reverse divide-sky-800 w-3/5 '>
        {/* <Contact /> */}
        <nav className="py-2 px-10 h-auto md:h-20 flex items-center fixed top-0 md:top-10 w-3/5 justify-between bg-sky-600/10"> {/* aca le quito un z-[100] */}
            <TitleLogo component={'nav'} title={'Rexantec'} />
            <ListNoSvg props={LISTNAV} />
            {/* <ListSvg /> */}
        </nav>
    </header>
};