//import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center select-none">
      <h1 className="flex flex-row items-center text-9xl font-extrabold text-blue-500/50 skew-y-12 transform delay-1000 hover:text-blue-500/95 cursor-default">REXANTEC</h1>
      <p className="flex flex-row items-center mt-20 font-semibold">En construcción... Próximamente.</p>
      <Link className="mt-2 text-blue-500 font-semibold hover:text-blue-500/95 hover:font-medium hover:underline italic" href={"mailto:consultas@rexantecservicios.com.ar"}>Contáctenos</Link>
    </main>
  );
}
