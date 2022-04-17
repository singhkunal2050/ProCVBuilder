import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Resume() {
  return (
    <section className="border-2 border-red-300 flex-1 p-2">
      <section className="top-section flex">
        <div className="flex flex-col border-2 border-red-200 p-2 ">
          <h2 className="text-4xl font-bold">Rahul Singh</h2>
          <p>Software Engineer</p>
          <p>Pune</p>
        </div>
        <div className="flex-1 border-2 border-red-200 flex flex-col items-end p-2 ">
          <p>rahul@gmail.com</p>
          <p>8888888888</p>
          <p className="flex flex-col">
            <div className="flex gap-1 justify-end">
              <FaFacebook />
              <FaGithub />
              <FaLinkedin /> <FaTwitter />
            </div>
            @rahulrsingh
          </p>
        </div>
      </section>
      <section className="middle-section border-2 border-red-200 grid grid-cols-60/40 ">
        <div className="left">
          <div className="experiences">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2">
              Experiences
            </h2>
            <article className=" border-2 border-red-200 p-2">
              <h3 className="text-lg font-bold">Inmax Infotech</h3>
              <p>Software Engineer</p>
              <p>Jan-20 - Dec-22</p>
            </article>
            <article className=" border-2 border-red-200 p-2">
              <h3 className="text-lg font-bold">Inmax Infotech</h3>
              <p>Software Engineer</p>
              <p>Jan-20 - Dec-22</p>
            </article>
            <article className=" border-2 border-red-200 p-2">
              <h3 className="text-lg font-bold">Inmax Infotech</h3>
              <p>Software Engineer</p>
              <p>Jan-20 - Dec-22</p>
            </article>
          </div>
        </div>
        <div className="right ">
          <div className="skills">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2">Skills</h2>
            <article className="border-2 border-red-200 flex gap-2 flex-wrap p-2">
              <span className="py-[2px] px-1 text-sm rounded-lg bg-red-200">
                HTML
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-red-200">
                CSS
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-red-200">
                Javascript
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-red-200">
                React
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-red-200">
                Java
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-red-200">
                Python
              </span>
            </article>
          </div>
          <div className="certifications">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2">Certifications</h2>
             <article className=" border-2 border-red-200 p-2">
              <h3 className="text-lg font-bold">Python Bootcamp</h3>
              <p>freecodecamp</p>
            </article>
            <article className=" border-2 border-red-200 p-2">
              <h3 className="text-lg font-bold">Python Bootcamp</h3>
              <p>freecodecamp</p>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Resume;
