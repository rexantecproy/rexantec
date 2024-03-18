import { metadata } from "@/app/layout";

export default function Format({ children, Title }) {
    metadata.title = Title;
    return (
        <div className="w-screen md:w-3/5">
            <main className="flex h-screen flex-col items-center justify-center select-none">
                {children}
            </main>
        </div>
    );
};