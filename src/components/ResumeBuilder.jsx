import { useRef } from "react";
import { Header, Preview, Editor } from "./Builder"
import TemplateSidebar from "./Builder/TemplateSidebar";

function ResumeBuilder() {
  const resumeRef = useRef();

  return (
    <section className="py-8">
      <Header  state={{ resumeRef }}  />
      <Preview state={{ resumeRef }} />
      <Editor />
      <TemplateSidebar/>
    </section>
  );
}

export default ResumeBuilder;
