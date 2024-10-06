"use client"

import { createRef, RefObject, useEffect, useState } from "react";

interface AudioProps {
    audioSource: string;
}

export default function Audio({ audioSource }: AudioProps) {
    const [startMusic, setStartMusic] = useState(false)
    const audioRef = createRef() as RefObject<HTMLAudioElement>

    
    useEffect(() => {
        window.addEventListener("mousedown", () => {
            setStartMusic(true)
        })
        
        if (audioRef) {
            if (audioRef.current && startMusic) {
                audioRef.current.play()
            }
        }
    }, [audioRef, startMusic])

    return (
        <audio id="al" ref={audioRef} autoPlay>
            <source src={audioSource} type='audio/mp3' />
        </audio>
    )
}