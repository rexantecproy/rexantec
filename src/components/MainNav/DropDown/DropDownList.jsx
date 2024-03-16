import SubList1 from './List/List1';

export default function GlobalList({ sub, title }) {
    return (
        <li className="list-none group/list_1 hover:flex bg-sky-600 text-sky-100">
            <span className="w-full inline-block box-content focus-visible:border focus-visible:border-sky-500 focus-visible:text-sky-100 focus-visible:bg-sky-500 focus-visible:shadow-xl border border-transparent hover:border hover:border-lime-600 hover:text-sky-100 hover:bg-lime-500 hover:shadow-xl active:shadow-2xl p-2">{`${title}`}</span>
            <ul className="hidden group-hover/list_1:flex flex-col w-48 justify-center mt-10 absolute bg-sky-500/75 list-none select-none [&>li]:text-sky-100 [&>li]:py-3 [&>li]:px-4 rounded-b-lg border border-sky-500/75 [&_li]:last:hover:rounded-b-lg [&_li]:nth-1:hover:rounded-b-lg">
                <SubList1 sub_1={sub} />
            </ul>
        </li>
    )
};