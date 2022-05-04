import ReactToPrint from "react-to-print";
import { useEditor } from "../../context/EditorContext";

export function Header({ state }) {
 const { resumeRef } = state;
    const { layout, setLayout } = useEditor();

    const SwitchLayout = (e) => {
        setLayout(e.target.value)
    }

    console.log(layout)

    return (
        <>
            <h4 className="text-base md:text-2xl font-bold py-4 text-center bg-gray-900 text-white">
                Resume Builder
            </h4>

            <ReactToPrint
                trigger={() => (
                    <button className="bg-gray-900 text-white px-5 font-bold p-2 mx-auto fixed bottom-10 left-20">
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
