import React from "react";
import Resume from "./Resume";
import ResumeEditor from "./ResumeEditor";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

function ResumeBuilder() {
  const resumeRef = useRef();

  return (
    <section className="py-8">
      <h4 className="text-base md:text-2xl font-bold py-4 text-center bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white">
        Resume Builder
      </h4>

      <ReactToPrint
        trigger={() => (
          <button className="bg-fuchsia-300 p-2 mx-auto">Print</button>
        )}
        content={() => resumeRef.current}
      />

      <section className="flex items-stretch min-h-[1200px]">
        <div  ref={resumeRef}>
          <Resume />
        </div>
        <ResumeEditor />
      </section>
    </section>
  );
}

export default ResumeBuilder;
