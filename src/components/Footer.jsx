import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer className=" px-2 py-10 text-white  bg-slate-900">
      <Container>
        <section className="flex items-center flex-col">
          <p className="text-center flex gap-1 mx-auto">
            Made with ♥ Using
          </p>
          <p>
             React | Context API | TailwindCSS
          </p>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
