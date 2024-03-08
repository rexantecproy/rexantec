//import Image from "next/image";

import Link from "next/link";
import IconLinkExt from "../../public/enlace-externo";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center select-none">
      <h1 className="flex flex-row items-center sm:text-9xl text-4xl font-extrabold text-blue-500/50 skew-y-12 transform delay-1000 hover:text-blue-500/95 cursor-default">REXANTEC</h1>
      <p className="flex flex-row items-center mt-20 font-semibold sm:text-base text-xs">En construcción... Próximamente.</p>
      <div className="hover:divide-solid hover:divide-x-reverse hover:divide-blue-500 hover:text-blue-500/95 sm:text-base text-xs">
        <Link className="mt-2 flex flex-row text-blue-500 font-semibold hover:font-medium italic" href={"mailto:consultas@rexantecservicios.com.ar"}>
          <p className="mr-2">Contáctenos</p> 
          <div className="invisible sm:visible">
            <IconLinkExt />
          </div>
        </Link>
      </div>
    </main>
  );
}
