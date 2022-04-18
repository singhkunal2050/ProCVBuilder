import { useRef, useState } from "react";
import { Header, Preview, Editor } from "./Builder"

function ResumeBuilder() {
  const resumeRef = useRef();

  return (
    <section className="py-8">
      <Header />
      <Preview state={{ resumeRef }} />
      <Editor />
    </section>
  );
}

export default ResumeBuilder;
