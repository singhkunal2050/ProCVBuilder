import { useEffect } from "react";
import ReactToPrint from "react-to-print";
import { useEditor , layoutCollection } from "../../context/EditorContext";

export function Header({ state }) {
 const { resumeRef } = state;
    const { layout, setLayout } = useEditor();

    const SwitchLayout = (e) => {
        setLayout(e.target.value)
    }

    console.log(layout)

    useEffect(()=>{
        console.log('header rendered')
        console.log(layout)
    },[layout])

    return (
        <section className="max-w-4xl flex justify-between my-4">
             <h6 className="p-4 font-xl ">{layout}</h6> 
           
            <ReactToPrint
                trigger={() => (
                    <button className="bg-gray-900 text-white px-5   font-bold ">
                        Print
                    </button>
                )}
                content={() => resumeRef.current}
            />

            {/* <select className="p-2 dark:bg-slate-700" onChange={SwitchLayout} defaultValue={layout}>
                <option value="" disabled>Choose Layout</option>
                {layoutCollection.map((l, index) => (
                    <option key={index} value={l.name}>{l.name}</option>
                ))}
            </select> */}
        </section>
    )
}
