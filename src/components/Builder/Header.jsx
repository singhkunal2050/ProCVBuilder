import { useRef } from "react";
import ReactToPrint from "react-to-print";

export function Header({ state }) {
    const { template, settemplate } = state
    const resumeRef = useRef();
    return (
        <>
            <h4 className="text-base md:text-2xl font-bold py-4 text-center bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white">
                Resume Builder
            </h4>

            <ReactToPrint
                trigger={() => (
                    <button className="bg-fuchsia-300 text-black font-bold p-2 mx-auto">
                        Print
                    </button>
                )}
                content={() => resumeRef.current}
            />

            <button
                className="ml-6 bg-fuchsia-300 text-black font-bold p-2 mx-auto"
                onClick={() => settemplate(!template)}
            >
                Toggle Template
            </button>
        </>
    )
}
