import Link from "next/link";

export default function TitleLogo({ component , title}) {
    return <>
        <div className={`${component == 'nav' ? 'flex' : 'hidden'}  flex-grow basis-0 justify-start md:justify-items-start select-none ml-1`}>
            <Link href="/" title='Home' className="font-extrabold text-lg basis-0 flex items-center justify-center ">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-transparent duration-500 hover:before:bg-sky-700  relative inline-block [&_span]:relative [&_span]:text-sky-600 [&:hover_span]:text-white [&_span]:duration-500 [&_span]:italic [&_span]:text-xl [&_span]:px-2 [&_span]:py-4 ">
                    <span>{title}</span>
                </span>
            </Link>
        </div>
        <blockquote className={`${component == 'body' ? 'flex' : 'hidden'} lg:text-2xl font-semibold italic text-center text-slate-900 my-8 z-[2]`}>
            Bienvenidos a&nbsp;&nbsp;&nbsp;
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-0 before:bg-sky-600 duration-500 hover:before:bg-[#f5f5f5] relative inline-block [&_span]:relative [&_span]:text-sky-200 [&:hover_span]:text-sky-800 [&:hover_span]:underline [&:hover_span]:underline-offset-4 [&_span]:duration-500 [&_span]:italic [&_span]:lg:text-xl [&_span]:z-[1]">
                <span>{title}</span>
            </span>
        </blockquote>
    </>
};