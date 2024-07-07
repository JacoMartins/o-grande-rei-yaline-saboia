import { twMerge } from "tailwind-merge";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    children?: React.ReactNode;
    bgColor?: string;
    textColor?: string;
}

export default function Section({ title, children, bgColor, textColor, ...rest }: SectionProps) {
    return (
        <section className={`flex justify-center items-center px-16 py-16 w-full text-center max-md:px-5 max-md:max-w-full sm:w-full max-sm:w-full sm:px-8 max-sm:px-8 ${bgColor ? bgColor : ""} ${textColor ? textColor : ""}`} {...rest}>
            <div className="flex flex-col gap-8 justify-center items-center w-full max-w-6xl">
                <h1 className="self-center text-4xl max-md:text-4xl">
                    {title}
                </h1>
                {children}
            </div>
        </section >
    )
}