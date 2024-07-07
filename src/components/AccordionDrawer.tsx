"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import questions from "@/data/questionStore";

export default function AccordionDrawer() {
    const [activeQuestion, setActiveQuestion] = useState<string>(Object.keys(questions)[0]);

    const handleActiveQuestion = (question: string) => {
        setActiveQuestion(question);
    }

    return (
        <div className="flex flex-col gap-10 justify-center items-center w-full max-w-3xl">
            <div className="flex gap-5 justify-start items-center lg:self-auto md:self-auto sm:self-stretch max-sm:self-stretch whitespace-nowrap overflow-auto">
                {Object.keys(questions).map((question) => {
                    return (
                        <button
                            key={question + 1}
                            className={`flex flex-col justify-center px-4 py-1 text-2xl rounded-lg transition-colors duration-300 ease-in-out hover:bg-sunset-yellow-400 hover:text-red-900 ${activeQuestion === question ? "text-red-900" : "text-sunset-yellow-400"} ${activeQuestion === question ? "bg-sunset-yellow-400" : "bg-transparent"}`}
                            onClick={() => handleActiveQuestion(question)}
                        >
                            {question}
                        </button>
                    )
                })}
            </div>
            {
                Object.entries(questions[activeQuestion]).map(([question, answer]) => {
                    return (
                        <Accordion
                            key={question + 24}
                            type="single"
                            collapsible
                        >
                            <AccordionItem
                                className="max-w-2xl w-full border-b-2 border-sunset-yellow-400"
                                value={question}
                            >
                                <AccordionTrigger
                                    className="text-2xl text-sunset-yellow-400"
                                >
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent className="text-xl text-sunset-orange-300 text-left">
                                    {answer}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}