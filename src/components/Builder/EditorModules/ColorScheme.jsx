import React from "react";
import { useState } from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import { BiChevronDown , BiChevronUp } from "react-icons/bi";
import { useEditor } from "../../../context/EditorContext";

function ColorScheme() {
  const [show, setshow] = useState(false);
  const { editor, setEditor } = useEditor();
  const colors = ["indigo", "rose", "blue", "emerald","slate"]

  const handleColorScheme = (e) => {
    setEditor({
      ...editor,
      accentColor: e.target.value,
    })
  }

  return (
    <div className="pb-4 mb-4 border-b">
      <div onClick={() => setshow(!show)} className="flex items-center justify-between">
      <h3 className="font-bold text-base cursor-pointer p-2 flex gap-2 items-center" >
        Color Scheme <AiOutlineBgColors />{" "}
      </h3>
        {show ? <BiChevronUp   />   : <BiChevronDown   />}
      </div>


      <div className={`option text-xs ${!show && "hidden"}`}>
        <div className="grid grid-cols-2 text-sm">
          {colors.map((color, index) => (
            <label key={index} htmlFor={color} className={`text-${color}-500 p-1 flex items-center gap-1`}>
              <input className={`w-4 h-4 accent-${color}-500`} id={color} name="color" type="radio" value={color} onChange={handleColorScheme} /> <span className="capitalize">{color}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorScheme;
