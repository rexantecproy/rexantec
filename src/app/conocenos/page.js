import { metadata } from "../layout";
metadata.title = 'Conócenos';

import Link from "next/link";
import IconLinkExt from "../../../public/img_svg/enlace-externo";

export default function Conocenos() {
  return (
    <div>
      <div className="w-screen md:w-full">
        <main className="flex h-screen flex-col items-center justify-center select-none">
          <h1 className="flex flex-row items-center sm:text-8xl text-3xl font-extrabold text-sky-500/50 skew-y-12 transform delay-1000 hover:text-sky-500/95 cursor-default">En Desarrollo</h1>
          <p className="flex flex-row items-center mt-20 font-semibold sm:text-base text-xs">Próximamente.</p>
          <div className="hover:divide-solid hover:divide-x-reverse hover:divide-sky-00 hover:text-sky-600/95 sm:text-base text-xs">
            <Link className="mt-2 flex flex-row text-sky-600 font-semibold hover:font-medium italic" href={"mailto:consultas@rexantecservicios.com.ar"}>
              <p className="mr-2">Contáctenos</p> 
              <div className="invisible sm:visible">
                <IconLinkExt />
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};