import React, { Suspense } from "react";
import { useLayout } from "../../context/LayoutContext";

export function Preview({ state }) {
  const { resumeRef } = state;
  const { layout } = useLayout(); 
  console.log({"layout rendereed":layout})  
  

  const CurrentLayout = React.lazy(() => import("../Layouts/" + layout.template));


  return (
    <section className={`min-h-[1200px] max-w-4xl ml-[60px] lg:mx-auto `} >
      <Suspense fallback={<div style={{background:"cyan"}}>Loading...</div>}>
        <div ref={resumeRef}>
          <CurrentLayout  />
        </div>
      </Suspense>

    </section>
  );
}
