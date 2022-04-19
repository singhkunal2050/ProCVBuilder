import { useRef } from "react";
import { Header, Preview, Editor } from "./Builder"

function ResumeBuilder() {
  const resumeRef = useRef();

  return (
    <section className="py-8">
      <Header  state={{ resumeRef }}  />
      <Preview state={{ resumeRef }} />
      <Editor />
    </section>
  );
}

export default ResumeBuilder;
