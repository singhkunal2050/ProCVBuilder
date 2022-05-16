// import { useState } from "react";
import ReactToPrint from "react-to-print";
import { useEditor } from "../../context/EditorContext";
import {
  BiLayer,
  BiSave,
  BiUpload,
  BiPrinter,
  BiZoomIn,
  BiZoomOut,
} from "react-icons/bi";

export function Header({ state }) {
  const { resumeRef } = state;
  const { layout  , zoom , updateZoom} = useEditor();
//  console.log(zoom)


  return (
    <section className="max-w-4xl flex justify-between my-4 mx-auto">
      <h6 className="pb-2 font-xl ">{layout.name}</h6>
      <section
        className={`fixed top-[72px] left-0 min-h-screen w-[50px] dark:bg-slate-700 bg-white z-10  transition-all duration-300 `}
      >
        <div className="py-4 max-h-screen  overflow-y-auto flex items-center flex-col gap-4 ">
          <BiLayer size={30} className={"p-1 bg-slate-800 cursor-pointer"} />
          <BiSave size={30} className={"p-1 bg-slate-800 cursor-pointer"} />
          <BiUpload size={30} className={"p-1 bg-slate-800 cursor-pointer"} />
          <ReactToPrint
            trigger={() => (
              <BiPrinter
                size={30}
                className={"p-1 bg-slate-800 cursor-pointer"}
              />
            )}
            content={() => resumeRef.current}
          />
          <BiZoomOut
            size={30}
            className={"p-1 bg-slate-800 cursor-pointer"}
            onClick={() => updateZoom("-")}
          />
          <BiZoomIn
            size={30}
            className={"p-1 bg-slate-800 cursor-pointer"}
            onClick={() => updateZoom("+")}
          />
        </div>
      </section>
    </section>
  );
}
