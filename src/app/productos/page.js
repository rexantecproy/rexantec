import { metadata } from "../layout";

export default function Productos() {
  metadata.title = 'PRODUCTOS';
  return (
    <div>
      <div className="w-screen md:w-full">
        <main className="flex h-screen flex-col items-center justify-center select-none">
          <h1 className="flex flex-row items-center sm:text-8xl text-3xl font-extrabold text-sky-500/50 skew-y-12 transform delay-1000 hover:text-sky-500/95 cursor-default">En Desarrollo Productos</h1>
          
        </main>
      </div>
    </div>
  );
};