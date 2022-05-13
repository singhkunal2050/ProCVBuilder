import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header>
      {/* bg-[url('//source.unsplash.com/600x700?job')] bg-cover bg-emerald-900 bg-blend-multiply  */}
      <div className="flex flex-col justify-center items-center py-16 ">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh] items-center">
            <div className="flex justify-center items-center h-full">
              <div className="px-6 md:px-12">
                <h1 className="text-5xl font-bold mt-0 mb-6 max-w-[30ch]">
                  Land Your Next Big Offer. Just like all our users did!! 🎓👩‍🎓👨‍🎓
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus tempore magnam porro provident! Omnis molestiae
                  animi voluptates, magnam nisi quod!
                </p>
                <Link to="/builder">
                  <button
                    type="button"
                    className="inline-flex px-6 mt-5 py-2.5 border-2 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <img src="//source.unsplash.com/500x500?resume" alt="" />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Hero;
