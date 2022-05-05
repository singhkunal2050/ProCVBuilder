import React from "react";
import { useState } from "react";
import { AiOutlineBgColors } from "react-icons/ai";
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
      <h3 className="font-bold text-xl cursor-pointer p-2 flex gap-2 items-center" onClick={() => setshow(!show)}>
        Color Scheme <AiOutlineBgColors />{" "}
      </h3>

      <div className={`option ${!show && "hidden"}`}>
        <div className="grid grid-cols-2">
          {colors.map((color, index) => (
            <label key={index} htmlFor={color} className={`text-${color}-500 p-1 flex items-center gap-1`}>
              <input id={color} name="color" type="radio" value={color} onChange={handleColorScheme} /> <span className="capitalize">{color}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorScheme;
