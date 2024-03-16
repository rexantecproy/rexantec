//import Image from "next/image";

import Link from "next/link";
import IconLinkExt from "../../../public/img_svg/enlace-externo";
//import Image from "next/image";
import Navbar from "../../components/MainNav/NavBar";
import Footer from "@/components/MainFooter/Footer";
import CircleMenu from "@/components/Circle-Animation/circleMenu";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <CircleMenu />
      <div className="w-screen md:w-3/5 bg-white">
        <Navbar />
        <main className="flex w-12/12 h-screen flex-col items-center justify-center select-none">
          <h1 className="flex flex-row items-center sm:text-8xl text-3xl font-extrabold text-sky-500/50 skew-y-12 transform delay-1000 hover:text-sky-500/95 cursor-default">En Desarrollo</h1>
          <p className="flex flex-row items-center mt-20 font-semibold sm:text-base text-xs">Próximamente.</p>
          <div className="hover:divide-solid hover:divide-x-reverse hover:divide-sky-00 hover:text-sky-600/95 sm:text-base text-xs">
            <Link className="mt-2 flex flex-row text-sky-600 font-semibold hover:font-medium italic" href={"mailto:consultas@rexantecservicios.com.ar"}>
              <p className="mr-2">Contáctenos</p> 
              <div className="invisible sm:visible">
                <IconLinkExt />
              </div>
            </Link>
            {/* <div className="">
              <Image src={"https://i.imgur.com/wjWBgce.jpeg"} key={"Image0100"} width={800} height={800} className="rounded-full mt-7 mb-7" />
            </div> */}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};