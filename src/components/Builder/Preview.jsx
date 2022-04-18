import React, { Suspense, useState } from 'react';
import { useEditor } from "../../context/EditorContext";

export function Preview({ state }) {
    const { resumeRef } = state
    const { editor, layout, setLayout } = useEditor();

    const OtherComponent = React.lazy(() => import('../Layouts/' + layout));

    return (
        <section className="min-h-[1200px]">
            <div ref={resumeRef}>
                <Suspense fallback={<div>Loading...</div>}>
                    <OtherComponent data={editor} />
                </Suspense>
                {/* {template ? <Resume /> : <Resume2 />} */}
            </div>
        </section>
    )
}
