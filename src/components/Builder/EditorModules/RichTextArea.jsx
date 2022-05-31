import React, { useState, useMemo } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

function RichTextArea() {

  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "We have some base content." }]
    }
  ]);

  console.log(editor)

  return (
    <div className="App">
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable style={{ border: "1px solid black" }}/>
      </Slate>
    </div>
  )
}

export default RichTextArea 