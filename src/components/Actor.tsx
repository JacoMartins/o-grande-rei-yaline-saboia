import { Inter } from "next/font/google";
import Image from "next/image";

interface ActorProps {
    image: any
}

const inter = Inter({ subsets: ['latin'] })

export default function Actor({ image }: ActorProps) {
    return (
        <div className="flex flex-col justify-start p-2 w-full rounded-xl bg-bloody-red-600 max-w-xs">
            <Image
                src={image}
                width={270}
                height={360}
                alt="Isaque Silva como Simba Adulto"
                className="w-full aspect-[0.75]"
            />
            <div className="flex flex-col p-2">
                <h4 className="text-2xl text-white">Isaque Silva</h4>
                <span className={`text-md text-base text-lemon-yellow-100 ${inter.className}`}>
                    Simba Adulto
                </span>
            </div>
        </div>
    )
}