import Link from 'next/link';
import Next from '../../../../../public/img_svg/form-next';

export default function SubList2({ sub_2 }) {
    return <>
        {
            sub_2.sub_content_1.length > 0 && <div className='absolute right-2 invisible group-hover/list_next:visible group/list_2 hover:flex'>
                <Next className="w-5 h-5 hover:border hover:border-sky-500/50 hover:rounded-full " />
                <ul key={`${sub_2.name}-`} className='absolute hidden ml-4 group-hover/list_2:flex flex-col w-44 justify-center bg-sky-500/75 list-none select-none [&>li]:text-sky-100 [&>li]:py-3 [&>li]:px-4 rounded-b-lg border border-sky-500/75 [&_li]:last:hover:rounded-b-lg [&_li]:nth-1:hover:rounded-b-lg'>
                    {
                        sub_2.sub_content_1.length > 0 && sub_2.sub_content_1.map((item_2, i) => {
                            return (
                                <li key={`${item_2.name}-${i}`} className="w-full relative hover:bg-sky-100 hover:text-sky-500 flex flex-row justify-center">
                                    <Link className='w-full' href={item_2.href}>{item_2.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        }
    </>
};