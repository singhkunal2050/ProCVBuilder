import React from "react";
import Resume from "./Resume";
import ResumeEditor from "./ResumeEditor";

function ResumeBuilder() {
  return (
    <section className="flex items-stretch min-h-screen">
      <Resume />
      <ResumeEditor />
    </section>
  );
}

export default ResumeBuilder;
