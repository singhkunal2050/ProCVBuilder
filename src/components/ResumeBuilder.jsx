import React from "react";
import Resume from "./Resume";
import ResumeEditor from "./ResumeEditor";

function ResumeBuilder() {
  return (
    <section className="py-8">
      <h4 className="text-base md:text-2xl font-bold py-4 text-center bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white">Resume Builder</h4>
      <section className="flex items-stretch min-h-screen">
        <Resume />
        <ResumeEditor />
      </section>
    </section>
  );
}

export default ResumeBuilder;
