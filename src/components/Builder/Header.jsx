import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useEditor } from "../../context/EditorContext";

export function Header({ state }) {
     const { resumeRef } = state;
    const { setLayout } = useEditor();

    const SwitchLayout = (e) => {
        setLayout(e.target.value)
    }

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

            <select className="p-2 dark:bg-slate-700" onChange={SwitchLayout}>
                <option value="" disabled>Choose Layout</option>
                <option value="L1">L1</option>
                <option value="L2">L2</option>
            </select>
        </>
    )
}
