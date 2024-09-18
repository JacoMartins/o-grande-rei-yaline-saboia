import { Inter } from "next/font/google";
import Image from "next/image";

interface GroupProps {
    image: any
    name: string;
    role: string;
    alt: string;
}

const inter = Inter({ subsets: ['latin'] })

export default function Group({ image, name, role, alt }: GroupProps) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner min-h-[20rem] min-w-[19rem] max-w-[19rem]">
                <div className="flex flex-col justify-start p-2 min-w-[19rem] max-w-[19rem] rounded-xl bg-bloody-red-600 select-none flip-card-front">
                    <figure className="flex flex-col justify-center items-center w-full overflow-hidden aspect-square select-none">
                        <Image
                            src={image}
                            width={270}
                            height={360}
                            alt={alt}
                            className="w-full"
                        />
                    </figure>
                    <div className="flex flex-col p-2">
                        <h4 className="text-2xl text-white">{name}</h4>
                        <span className={`text-md text-base text-lemon-yellow-100 ${inter.className}`}>
                            {role}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-start p-2 min-w-[19rem] max-w-[19rem] rounded-xl bg-bloody-red-600 select-none flip-card-back">
                    <figure className="flex flex-col justify-center items-center w-full overflow-hidden aspect-square select-none">
                        <Image
                            src={image}
                            width={270}
                            height={360}
                            alt={alt}
                            className="w-full"
                        />
                    </figure>
                    <div className="flex flex-col p-2">
                        <h4 className="text-2xl text-white">{name}</h4>
                        <span className={`text-md text-base text-lemon-yellow-100 ${inter.className}`}>
                            {role}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}