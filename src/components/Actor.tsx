'use client'

import { Inter } from "next/font/google";
import Image from "next/image";
import { createRef, useState } from "react";

interface ActorProps {
    actorImage: any;
    characterImage: any;
    alt: string;
    name: string;
    role: string;
}

const inter = Inter({ subsets: ['latin'] })

export default function Actor({ actorImage, characterImage, alt, name, role }: ActorProps) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner h-[25rem] min-w-[14rem]">
                <div className="flex flex-col justify-start p-2 rounded-xl bg-bloody-red-600 select-none flip-card-front">
                    <figure className="w-full aspect-[0.75] overflow-hidden select-none">
                        <Image
                            src={actorImage}
                            alt={alt}
                            width={actorImage.width}
                            height={actorImage.height}
                            className="object-cover h-full"
                        />
                    </figure>
                    <div className="flex flex-col p-2">
                        <h4 className="text-2xl text-white">{name}</h4>
                        <span className={`text-md text-base text-lemon-yellow-100 ${inter.className}`}>
                            {role}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-start p-2 max-h-[25rem] min-w-[14rem] rounded-xl bg-bloody-red-600 select-none flip-card-back">
                    <Image
                        src={characterImage}
                        alt={alt}
                        width={characterImage.width}
                        height={characterImage.height}
                        className="w-full object-cover aspect-[0.75] select-none"
                    />
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