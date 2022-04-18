import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function L2({ data }) {
  const { firstname, lastname, email, phone } = data.personal;
  return (
    <section className="border-2 border-indigo-300 border-l-8 border-l-indigo-800 flex-1 p-2">
      <section className="top-section flex flex-col items-center">
        <div className="flex flex-col text-center dark:border-indigo-900 p-2  ">
          <h2 className="text-4xl font-bold text-indigo-600">{firstname} {lastname}</h2>
          <p className="font-semibold">Software Engineer</p>
          <p>Pune</p>
        </div>
        <div className="flex-1 py-2 dark:border-indigo-900 flex gap-4">
          <p>{email}</p>
          <p>{phone}</p>
          <div className="flex flex-row-reverse gap-2 items-center">
            <div className="flex gap-1 text-indigo-600">
              <a href={'/'}><FaFacebook /></a>
              <FaGithub />
              <FaLinkedin /> <FaTwitter />
            </div>
            @rahulrsingh
          </div>
          <p>rahulkumar.com</p>
        </div>
      </section>
      <section className="middle-section border-2 border-indigo-100 dark:border-indigo-900 grid grid-cols-60/40 ">
        <div className="left">
          <div className="experiences">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2 text-indigo-600">
              Experiences
            </h2>
            <article className=" border-2 border-indigo-100 dark:border-indigo-900 p-2">
              <h3 className="text-lg font-bold">Inmax Infotech</h3>
              <p>Software Engineer</p>
              <p>Jan-20 - Dec-22</p>
              <ul className="points list-disc ml-6 text-sm marker:text-indigo-700">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus, omnis?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus, omnis?
                </li>
              </ul>
            </article>
            <article className=" border-2 border-indigo-100 dark:border-indigo-900 p-2">
              <h3 className="text-lg font-bold">Inmax Infotech</h3>
              <p>Software Engineer</p>
              <p>Jan-20 - Dec-22</p>
              <ul className="points list-disc ml-6 text-sm marker:text-indigo-700">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus, omnis?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus, omnis?
                </li>
              </ul>
            </article>
            <article className=" border-2 border-indigo-100 dark:border-indigo-900 p-2">
              <h3 className="text-lg font-bold">Inmax Infotech</h3>
              <p>Software Engineer</p>
              <p>Jan-20 - Dec-22</p>
              <ul className="points list-disc ml-6 text-sm marker:text-indigo-700">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus, omnis?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Necessitatibus, omnis?
                </li>
              </ul>
            </article>
          </div>
          <div className="education">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2 text-indigo-600">
              Education
            </h2>
            <article className=" border-2 border-indigo-100 dark:border-indigo-900 p-2">
              <h3 className="text-lg font-bold">BTech</h3>
              <p>Pune University</p>
              <p>2018 -2022</p>
            </article>

            <article className=" border-2 border-indigo-100 dark:border-indigo-900 p-2">
              <h3 className="text-lg font-bold">HSC</h3>
              <p>Pune University</p>
              <p>2016 -2018</p>
            </article>

          </div>
        </div>
        <div className="right ">
          <div className="skills">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2 text-indigo-600">
              Skills
            </h2>
            <article className="border-2 border-indigo-100 dark:border-indigo-900 flex gap-2 flex-wrap p-2">
              
              


              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                PHP
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                CSS
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                Javascript
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                React
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                Java
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                Python
              </span>
            </article>
          </div>
          <div className="certifications">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2 text-indigo-600">
              Certifications
            </h2>
            <article className=" border-2 border-indigo-100 dark:border-indigo-900 p-2">
              <h3 className="text-lg font-bold">Python Bootcamp</h3>
              <p>freecodecamp</p>
              <div className="stars text-indigo-700 flex gap-1 text-xs">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </article>
            <article className=" border-2 border-indigo-100 dark:border-indigo-900 p-2">
              <h3 className="text-lg font-bold">Python Bootcamp</h3>
              <p>freecodecamp</p>
              <div className="stars text-indigo-700 flex gap-1 text-xs">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </article>
          </div>
          <div className="Projects">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2 text-indigo-600">
              Certifications
            </h2>
            <article className=" border-2 border-indigo-100 dark:border-indigo-900 p-2">
              <h3 className="text-lg font-bold">Passowrd Generator</h3>
              <p>Python,Numpy</p>
              <ul className="points list-disc ml-6 text-sm marker:text-indigo-700">
                <li>
                  Lorem ipsum ctetur adipisicing elit. Necessitatibus, omnis?
                </li>
                <li>Lorem ipsum elit. Necessitatibus, omnis?</li>
              </ul>
            </article>
            <article className=" border-2 border-indigo-100 dark:border-indigo-900 p-2">
              <h3 className="text-lg font-bold">Ecommerce App</h3>
              <p>React,Nodejs</p>
              <ul className="points list-disc ml-6 text-sm marker:text-indigo-700">
                <li>
                  Lorem ipsum ctetur adipisicing elit. Necessitatibus, omnis?
                </li>
                <li>Lorem ipsum elit. Necessitatibus, omnis?</li>
              </ul>
            </article>
          </div>
          <div className="languages">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2 text-indigo-600">
              Languages
            </h2>
            <article className="border-2 border-indigo-100 dark:border-indigo-900 flex gap-2 flex-wrap p-2">
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                English
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                Hindi
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                Marathi
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                Gujarati
              </span>
            </article>
          </div>
          <div className="hobbies">
            <h2 className="text-2xl font-bold capitalize mb-1 p-2 text-indigo-600">
              Hobbies
            </h2>
            <article className="border-2 border-indigo-100 dark:border-indigo-900 flex gap-2 flex-wrap p-2">
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                Singing
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                Bike Riding
              </span>
              <span className="py-[2px] px-1 text-sm rounded-lg bg-indigo-100 dark:bg-indigo-700 dark:text-white">
                Trekking
              </span>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}
