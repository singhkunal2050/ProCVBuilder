import React from "react";
import { useState } from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import { useEditor } from "../../../context/EditorContext";

function ColorScheme() {
  const [show, setshow] = useState(true);
  const { editor, setEditor } = useEditor();
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    setEditor({
      ...editor,
      accentColor: color,
    })
  };

  const updateColor = (e) => {
    if ((e.target.name = "color")) {
      setColor(e.target.value);
      console.log(`color updated ${e.target.value}`);
    }
  };

  return (
    <div className="pb-4 mb-4 border-b">
      <h3
        className="font-bold text-xl cursor-pointer p-2 flex gap-2 items-center"
        onClick={() => setshow(!show)}
      >
        Color Scheme <AiOutlineBgColors />{" "}
      </h3>

      <div className={`option ${!show && "hidden"}`}>
        <form
          onSubmit={handleSubmit}
          onChange={updateColor}
          className="flex flex-col"
        >
          <div className="grid grid-cols-2">
            
          <label htmlFor="blue" className="bg-blue-500 p-1 flex items-center gap-1">
            <input  id="blue" name="color" type="radio" value="blue" />
              blue
          </label>
            <label htmlFor="emerald" className="bg-emerald-500 p-1 flex items-center gap-1">
              <input  id="emerald" name="color" type="radio" value="emerald" />
                Emerald
            </label>
            <label htmlFor="indigo" className="bg-indigo-600 p-1 flex items-center gap-1">
              <input id="indigo" name="color" type="radio" value="indigo" />
                Indigo
            </label>
            <label htmlFor="rose" className="bg-rose-500 p-1 flex items-center gap-1">
              <input  id="rose" name="color" type="radio" value="rose" />
                rose
            </label>
          </div>

          <div className="flex flex-col mb-2 col-span-2 mt-2">
            <button
              type="submit"
              className="rounded bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white p-2 font-semibold text-sm"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ColorScheme;
