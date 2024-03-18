import { metadata } from "../layout";

export default function Home() {
  metadata.title = 'HOME';
  return (
    <div>
      <div className="w-screen md:w-3/5 md:px-10">
        <main className="flex h-screen flex-col items-center justify-center select-none">
          <h1 className="flex flex-row items-center sm:text-8xl text-3xl font-extrabold text-sky-500/50 skew-y-12 transform delay-1000 hover:text-sky-500/95 cursor-default">En Desarrollo Home</h1>
        </main>
      </div>
    </div>
  );
};