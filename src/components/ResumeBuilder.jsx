import Resume from "./Resume";
import Resume2 from "./Resume2";
import ResumeEditor from "./ResumeEditor";
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";

function ResumeBuilder() {
  const resumeRef = useRef();
  const [template, settemplate] = useState(false);

  return (
    <section className="py-8">
      <h4 className="text-base md:text-2xl font-bold py-4 text-center bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white">
        Resume Builder
      </h4>

      <ReactToPrint
        trigger={() => (
          <button className="bg-fuchsia-300 text-black font-bold p-2 mx-auto">
            Print
          </button>
        )}
        content={() => resumeRef.current}
      />

      <button
        className="ml-6 bg-fuchsia-300 text-black font-bold p-2 mx-auto"
        onClick={() => settemplate(!template)}
      >
        Toggle Template
      </button>
      <section className="flex items-stretch min-h-[1200px]">
        <div className="flex-1" ref={resumeRef}>
          {template ? <Resume /> : <Resume2 />}
        </div>
        <ResumeEditor />
      </section>
    </section>
  );
}

export default ResumeBuilder;
