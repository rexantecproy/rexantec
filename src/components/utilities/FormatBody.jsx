import { metadata } from "@/app/layout";

export default function Format({ children, Title }) {
    metadata.title = Title;
    const titlePageStr = `${Title.charAt(0).toUpperCase()}${Title.slice(1).toLowerCase()}`
    return (
        <div className="w-screen md:w-3/5">
            <main className="flex h-screen flex-col items-center justify-center select-none">
                <h1 h1 className="flex flex-row text-center sm:text-8xl text-3xl font-extrabold bg-gradient-to-r from-sky-500/5 from-0% to-sky-500 to-100%  hover:bg-gradient-to-r hover:from-red-500/5 hover:from-0% hover:to-red-500 hover:to-100% text-black cursor-default p-2">
                    En Desarrollo: {titlePageStr} 
                </h1>
                {children}
            </main>
        </div>
    );
};