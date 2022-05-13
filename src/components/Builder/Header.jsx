import { useEffect } from "react";
import ReactToPrint from "react-to-print";
import { useEditor  } from "../../context/EditorContext";

export function Header({ state }) {
 const { resumeRef } = state;
    const { layout } = useEditor();
    console.log(layout)

    useEffect(()=>{
        console.log('header rendered')
        console.log(layout)
    },[layout])

    return (
        <section className="max-w-4xl flex justify-between my-4">
             <h6 className="p-4 font-xl ">{layout.name}</h6> 
           
            <ReactToPrint
                trigger={() => (
                    <button className="bg-gray-900 text-white px-5   font-bold ">
                        Print
                    </button>
                )}
                content={() => resumeRef.current}
            />
        </section>
    )
}
