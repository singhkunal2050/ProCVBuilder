import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-white px-2 py-10 text-white border-t-2 bg-gradient-to-r from-emerald-500 to-fuchsia-600  dark:from-emerald-800 dark:to-fuchsia-900">
      <Container>
        <section className="flex items-center flex-col">
          <p className="text-center flex gap-1 mx-auto">
            Made with ♥
          </p>
          <p>
            Using React | TailwindCSS | Redux 
          </p>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
