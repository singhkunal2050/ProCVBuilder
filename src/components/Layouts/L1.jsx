// import { FaStar } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useEditor } from "../../context/EditorContext"

export default function L1({ data }) {

  const { editor , zoom } = useEditor();

  const {
    firstname,
    lastname,
    email,
    phone,
    designation,
    city,
    website,
    facebookLink,
    twitterLink,
    linkedinLink,
    githubLink,
  } = editor.personal;
  const {
    skills,
    languages,
    accentColor,
    certifications,
    educations,
    experiences,
    projects,
  } = editor;

  return (
    <section
      style={{ transform: `scale(${zoom})` }}
      className={` layout min-h-[1050px] dark:bg-slate-800 dark:text-gray-200 flex-1 p-4 shadow-xl origin-top`}
    >
      <div className="bg-rose-600 text-rose-600 border-rose-600 marker:text-rose-700 hidden">
        <div className="bg-rose-500 text-rose-500 border-rose-500"></div>
        <div className="bg-rose-400 text-rose-400 border-rose-400"></div>
        <div className="bg-rose-300 text-rose-300 border-rose-300"></div>
        <div className="bg-rose-200 text-rose-200 border-rose-200"></div>
        <div className="bg-rose-100 text-rose-100 border-rose-100"></div>
        <div className="bg-rose-700 text-rose-700 border-rose-700"></div>
        <div className="bg-rose-800 text-rose-800 border-rose-800"></div>
        <div className="bg-rose-900 text-rose-900 border-rose-900"></div>
      </div>
      <div className="bg-blue-600 text-blue-600 border-blue-600 marker:text-blue-700 hidden ">
        <div className="bg-blue-500 text-blue-500 border-blue-500"></div>
        <div className="bg-blue-400 text-blue-400 border-blue-400"></div>
        <div className="bg-blue-300 text-blue-300 border-blue-300"></div>
        <div className="bg-blue-200 text-blue-200 border-blue-200"></div>
        <div className="bg-blue-100 text-blue-100 border-blue-100"></div>
        <div className="bg-blue-700 text-blue-700 border-blue-700"></div>
        <div className="bg-blue-800 text-blue-800 border-blue-800"></div>
        <div className="bg-blue-900 text-blue-900 border-blue-900"></div>
      </div>
      <div className="bg-slate-600 text-slate-600 border-slate-600 marker:text-slate-700 hidden ">
        <div className="bg-slate-500 text-slate-500 border-slate-500"></div>
        <div className="bg-slate-400 text-slate-400 border-slate-400"></div>
        <div className="bg-slate-300 text-slate-300 border-slate-300"></div>
        <div className="bg-slate-200 text-slate-200 border-slate-200"></div>
        <div className="bg-slate-100 text-slate-100 border-slate-100"></div>
        <div className="bg-slate-700 text-slate-700 border-slate-700"></div>
        <div className="bg-slate-800 text-slate-800 border-slate-800"></div>
        <div className="bg-slate-900 text-slate-900 border-slate-900"></div>
      </div>
      <section className="top-section flex">
        <div className={`flex flex-col p-2`}>
          <h2 className={`text-4xl font-bold text-${accentColor}-600`}>
            {firstname} {lastname}
          </h2>
          <p>{designation}</p>
          <p>{city}</p>
        </div>
        <div className={`flex-1  flex flex-wrap flex-col items-end p-2`}>
          {email && <a href={`mailto:${email}`}>{email}</a>}
          {phone && <a href={`tel:${phone}`}> {phone}</a>}
          <div className="flex flex-col">
            <div className={`flex gap-1 justify-end text-${accentColor}-800`}>
              {facebookLink && (
                <a target="_blank" rel="noreferrer" href={"//" + facebookLink}>
                  <FaFacebook />
                </a>
              )}
              {githubLink && (
                <a href={"//" + githubLink}>
                  <FaGithub />
                </a>
              )}
              {linkedinLink && (
                <a href={"//" + linkedinLink}>
                  <FaLinkedin />
                </a>
              )}
              {twitterLink && (
                <a href={"//" + twitterLink}>
                  <FaTwitter />
                </a>
              )}
            </div>
            {website && (
              <a target="_blank" rel="noreferrer" href={"//" + website}>
                {website}
              </a>
            )}
          </div>
        </div>
      </section>
      <section className={`middle-section grid grid-cols-60/40`}>
        <div className="left">
          <div className="experiences">
            <h2
              className={`text-2xl font-bold capitalize mb-1 p-2 text-${accentColor}-600`}
            >
              Experiences
            </h2>

            {experiences &&
              experiences.length > 0 &&
              experiences.map((experience, index) => (
                <article key={index} className={`p-2`}>
                  <h3 className="text-lg font-bold">
                    {experience.companyName}
                  </h3>
                  <p>{experience.role}</p>
                  <p>
                    {experience?.from?.substr(0, 7)} -{" "}
                    {experience?.to?.substr(0, 7)}
                  </p>
                  <ul
                    className={`points list-disc ml-6 text-xs marker:text-${accentColor}-700`}
                  >
                    {experience.hightlights && experience.hightlights.split('\n').map((exp,i) => <li key={i}>{exp}</li>)}
                  </ul>
                </article>
              ))}
          </div>
          <div className="education">
            <h2
              className={`text-2xl font-bold capitalize mb-1 p-2 text-${accentColor}-600`}
            >
              Education
            </h2>

            {educations &&
              educations.length > 0 &&
              educations.map((education, index) => (
                <article key={index} className={`p-2`}>
                  <h3 className="text-lg font-bold">{education.name}</h3>
                  <p>{education.institute}</p>
                  <p>
                    {education?.year_from?.substr(0, 7)} -{" "}
                    {education?.year_to?.substr(0, 7)}
                  </p>
                </article>
              ))}
          </div>
        </div>
        <div className="right ">
          <div className="skills">
            <h2
              className={`text-2xl font-bold capitalize mb-1 p-2 text-${accentColor}-600`}
            >
              Skills
            </h2>
            <article className={`flex gap-2 flex-wrap p-2`}>
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`py-[2px] px-1 text-sm rounded-lg bg-${accentColor}-100 dark:bg-transparent dark:border-2`}
                >
                  {skill}
                </span>
              ))}
            </article>
          </div>
          <div className="certifications">
            <h2
              className={`text-2xl font-bold break-all capitalize mb-1 p-2 text-${accentColor}-600`}
            >
              Certifications
            </h2>

            {certifications.filter(cert=>cert.name.trim()!=='' && cert.institute.trim()!=="").map((cert, index) => {
              return (
                <article key={index} className={`p-2`}>
                  <h3 className="text-lg font-bold">{cert.name}</h3>
                  <p>{cert.institute}</p>
                  <p>{cert.year.substr(0, 7)}</p>
                  {/* <div
                    className={`stars text-${accentColor}-700 flex gap-1 text-xs`}
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div> */}
                </article>
              );
            })}
          </div>
          <div className="Projects">
            <h2
              className={`text-2xl font-bold capitalize mb-1 p-2 text-${accentColor}-600`}
            >
              Projects
            </h2>

            {projects &&
              projects.length > 0 &&
              projects.map((project, index) => (
                <article key={index} className={`p-2`}>
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p>{project.stack}</p>
                  <p>
                    {project?.from?.substr(0, 7)} - {project?.to?.substr(0, 7)}
                  </p>
                  <ul
                    className={`points list-disc ml-6 text-xs marker:text-${accentColor}-700`}
                  >
                    {project.hightlights && project.hightlights.split('\n').map((proj,i) => <li key={i}>{proj}</li>)}
                  </ul>
                </article>
              ))}
          </div>
          <div className="skills">
            <h2
              className={`text-2xl font-bold capitalize mb-1 p-2 text-${accentColor}-600`}
            >
              Languages
            </h2>
            <article className={`flex gap-2 flex-wrap p-2`}>
              {languages.map((language, index) => (
                <span
                  key={index}
                  className={`py-[2px] px-1 text-sm rounded-lg bg-${accentColor}-100 dark:bg-transparent dark:border-2 `}
                >
                  {language}
                </span>
              ))}
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}
