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
        <div className="flex flex-col gap-10 justify-center items-center max-w-3xl lg:w-3xl md:w-full sm:w-full max-sm:w-full">
            <div className="flex gap-5 justify-start items-center overflow-auto w-full">
                {Object.keys(questions).map((question) => {
                    return (
                        <button
                            key={question + 1}
                            type="button"
                            className={`flex flex-col justify-center px-4 py-1 text-2xl rounded-lg transition-colors duration-300 ease-in-out hover:bg-lemon-yellow-100 hover:text-strong-wood-700 ${activeQuestion === question ? "text-strong-wood-700" : "text-lemon-yellow-100"} ${activeQuestion === question ? "bg-lemon-yellow-100" : "bg-transparent"}`}
                            onClick={() => handleActiveQuestion(question)}
                        >
                            {question}
                        </button>
                    )
                })}
            </div>
            <div className="flex flex-col gap-5 justify-center items-center lg:w-[36rem] md:w-full sm:w-full max-sm:w-full">
                {
                    Object.entries(questions[activeQuestion]).map(([question, answer]) => {
                        return (
                            <Accordion
                                key={question + 24}
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                <AccordionItem
                                    className="w-full border-b-2 border-lemon-yellow-100"
                                    value={question}
                                >
                                    <AccordionTrigger
                                        className="text-2xl text-lemon-yellow-100"
                                    >
                                        {question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-xl text-sunset-orange-300 text-left w-full">
                                        {answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        )
                    })
                }
            </div>
        </div>
    )
}