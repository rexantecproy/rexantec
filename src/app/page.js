//import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center">
      <h1 className="flex flex-row items-center text-7xl font-extrabold text-blue-500">REXANTEC</h1>
      <p className="flex flex-row items-center mt-10 font-semibold">En construcción... Proximamente.</p>
      <Link className="mt-8 text-blue-300 hover:text-blue-600 hover:font-semibold" href={"tomail:consultas@rexantecservicios.com.ar"}>Contactanos</Link>
    </main>
  );
}
