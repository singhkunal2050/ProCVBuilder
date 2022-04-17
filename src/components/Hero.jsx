import React from "react";
import Container from "./Container";

function Hero() {
  return (
    <header>
      <div
        className="flex flex-col justify-center items-center py-20"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <Container>
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl font-bold mt-0 mb-6 max-w-[30ch]">
                Land Your Next Big Offer. Just like all our users did!! 🎓👩‍🎓👨‍🎓
              </h1>
              <h3 className="text-3xl font-bold mb-8">Subeading</h3>
              <button
                type="button"
                className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Get started
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Hero;
