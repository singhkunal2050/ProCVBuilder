import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import { useEditor } from "../../../context/EditorContext";

function ColorScheme() {
  const [show, setshow] = useState(false);
  const { editor, setEditor } = useEditor();
  const [color, setColor] = useState("");
  
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    console.log("submit");
    setEditor,
    });
  };
  
  const className="({
      ...editor,
      accentColor: color" updateColor = (e) => {
    if ((e.target.name = "color")) {
      setColor(e.target.value);
      console.log(`color updated ${e.target.value}`);
    }
    handleSubmit();
  };

  return (
    <div className="pb-4 mb-4 border-b">
      <h3
        className="font-bold text-base cursor-pointer p-2 flex gap-2 items-center"
        onClick={() => setshow(!show)}
      >
        Color Scheme <AiOutlineBgColors />{" "}
      </h3>

      <div className={`option text-xs ${!show && "hidden"}`}>
        <form
          onSubmit={handleSubmit}
          onChange={updateColor}
          className="flex flex-col"
        >
          <div className="grid grid-cols-2">
            <label
              htmlFor="blue"
              className="bg-blue-500 p-1 flex items-center gap-1 "
            >
              <input id="blue" name="color" type="radio" value="blue" className="w-4 h-4 accent-[red]" />
              blue
            </label>
            <label
              htmlFor="emerald"
              className="bg-emerald-500 p-1 flex items-center gap-1 "
            >
              <input id="emerald" name="color" type="radio" value="emerald" className="w-4 h-4 accent-emerald-500" />
              Emerald
            </label>
            <label
              htmlFor="indigo"
              className="bg-indigo-600 p-1 flex items-center gap-1 "
            >
              <input id="indigo" name="color" type="radio" value="indigo" className="w-4 h-4 accent-indigo-600" />
              Indigo
            </label>
            <label
              htmlFor="rose"
              className="bg-rose-500 p-1 flex items-center gap-1 "
            >
              <input id="rose" name="color" type="radio" value="rose" className="w-4 h-4 accent-rose-500" />
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
