import Link from "next/link";
import ModalNetworks from "./MenuModalSocialNetworks";
import ListPlus from "./ListPlus";

export default function Footer() {
    return (
        <div className="w-full flex justify-center text-sky-600 bg-gradient-to-t from-sky-50 from-10% via-sky-200 via-90% to-sky-400 to-100% select-none ">
            <div className="flex flex-col w-3/5 justify-center">
                <div className="flex flex-row items-center md:items-start mt-10 mb-5 nth-4:mr-10 [&_ul]:ml-4 md:[&>ul]:h-44 h-60">
                    <ListPlus />
                </div>
                <div className="flex flex-col">
                    <ModalNetworks />
                    <hr className="bg-sky-800 h-[3px]" />
                    <div className="flex flex-col md:flex-row w-full justify-between pb-5 pt-2 md:text-base text-xs">
                        <p>© Copyright | Rexantec 2024</p>
                        <p>Hecho por <Link href={'https//:wwww.google.com.ar'} className="hover:font-semibold hover:text-sky-800 pl-1 hover:pl-0.5">Maidana Iván</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
};