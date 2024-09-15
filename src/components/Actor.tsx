import { Inter } from "next/font/google";
import Image from "next/image";

interface ActorProps {
    image: any;
    alt: string;
    name: string;
    role: string;
}

const inter = Inter({ subsets: ['latin'] })

export default function Actor({ image, alt, name, role }: ActorProps) {
    return (
        <div className="flex flex-col justify-start p-2 max-h-[25rem] min-w-[14rem] rounded-xl bg-bloody-red-600 select-none">
            <Image
                src={image}
                alt={alt}
                width={270}
                height={360}
                className="w-full aspect-[0.75] select-none"
            />
            <div className="flex flex-col p-2">
                <h4 className="text-2xl text-white">{name}</h4>
                <span className={`text-md text-base text-lemon-yellow-100 ${inter.className}`}>
                    {role}
                </span>
            </div>
        </div>
    )
}