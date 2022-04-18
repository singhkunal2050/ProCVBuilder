import { useRef, useState } from "react";
import { Header, Preview, Editor } from "./Builder"

function ResumeBuilder() {
  const resumeRef = useRef();
  const [template, settemplate] = useState(false);

  return (
    <section className="py-8">
      <Header state={{ template, settemplate }} />
      <Preview state={{ template, resumeRef }} />
      <Editor />
    </section>
  );
}

export default ResumeBuilder;
