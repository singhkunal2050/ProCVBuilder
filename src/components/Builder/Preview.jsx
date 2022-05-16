import React, { Suspense } from "react";
import { useEditor } from "../../context/EditorContext";

export function Preview({ state }) {
  const { resumeRef } = state;
  const { editor, layout } = useEditor();
  // console.log(layout)  
  const CurrentLayout = React.lazy(() => import("../Layouts/" + layout.template));
  return (
    <section className={`min-h-[1200px] max-w-4xl mx-auto origin-top-left `} 
    style={{ transform: `scale(${layout.zoom})` }}>
      <Suspense fallback={<div>Loading...</div>}>
        <div ref={resumeRef}>
          <CurrentLayout data={editor} />
        </div>
      </Suspense>

    </section>
  );
}
