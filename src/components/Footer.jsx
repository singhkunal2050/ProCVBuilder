import React from "react";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-white px-2 py-10 text-white border-t-2 bg-gradient-to-r from-emerald-500 to-fuchsia-600  ">
      <Container>
        <section className="flex items-center flex-col">
          <p className="text-center flex gap-1 mx-auto">
            Made with{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="red"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>{" "}
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
