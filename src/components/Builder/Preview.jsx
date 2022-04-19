import React, { Suspense } from "react";
import { useEditor } from "../../context/EditorContext";

export function Preview({ state }) {
  const { resumeRef } = state;
  const { editor, layout } = useEditor();

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
