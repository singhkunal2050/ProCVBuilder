import React, { Suspense, useState } from "react";
import { useEditor } from "../../context/EditorContext";

export function Preview({ state }) {
  const { resumeRef } = state;
  const { editor, layout, setLayout } = useEditor();

  const CurrentLayout = React.lazy(() => import("../Layouts/" + layout));

  return (
    <section className="min-h-[1200px]">
      <Suspense fallback={<div>Loading...</div>}>
        <div ref={resumeRef}>
          <CurrentLayout data={editor} />
        </div>
      </Suspense>

    </section>
  );
}
