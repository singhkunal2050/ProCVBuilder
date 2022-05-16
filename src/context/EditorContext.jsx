import { createContext, useContext, useState } from "react";
// import template1 from '../assets/resumes/template1.jpg'
// import template2 from '../assets/resumes/template2.jpg'

export const EditorContext = createContext();

export const useEditor = () => {
  return useContext(EditorContext);
};

// export const layoutCollection = [
//   { name: "Professional Template", template : "L1" , thumbnail: template1 },
//   { name: "Clean Concise Template",  template : "L2"  ,  thumbnail: template2 },
// ];

export function EditorProvider(props) {
  // const [layout, setLayout] = useState({ name: "Resume Template 1", template : "L1" , thumbnail: template1 });
  const [zoom, setZoom] = useState(1);

    const updateZoom = (operation) => {
      if (operation === "+") {
        if (zoom <= 1.5) {
          setZoom(zoom + 0.1);
        }
      } else {
        if (zoom >= 0.5) {
          setZoom(zoom - 0.1);
        }
      }
    };


  const [editor, setEditor] = useState({
    accentColor: "rose",
    personal: {
      firstname: "Mike",
      lastname: "Alpha",
      email: "mikealpha@gmail.com",
      phone: "9999999999",
      designation: "Developer",
      city: "Madrid",
      website: "demo.com",
      facebookLink: "facebook.com",
      twitterLink: "twitter.com",
      linkedinLink: "linkedin.com",
      githubLink: "github.com",
    },
    skills: ["HTML", "CSS", "Javascript", "nodejs", "Mongodb"],
    experiences: [
      {
        companyName: "AA Infotech",
        role: "Software Engineer",
        from: "2018-01-20",
        to: "2020-01-20",
        highlights: [
          "Developed a web application for managing the inventory of a company",
          "Developed a web application for managing the inventory of a company",
          "Developed a web application for managing the inventory of a company",
        ],
      },
      {
        companyName: "AA Infotech",
        role: "Software Engineer",
        from: "2018-01-20",
        to: "2020-01-20",
        highlights: [
          "Developed a web application for managing the inventory of a company",
          "Developed a web application for managing the inventory of a company",
          "Developed a web application for managing the inventory of a company",
        ],
      },
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect - Associate",
        institute: "Amazon Web Services",
        year: "2020-01-20",
      },
      {
        name: "AWS Certified Solutions Architect - Developer",
        institute: "Amazon Web Services",
        year: "2020-01-20",
      },
      {
        name: "AWS Certified Solutions Architect - Tester",
        institute: "Amazon Web Services",
        year: "2020-01-20",
      },
    ],
    educations: [
      {
        name: "BCS",
        institute: "Pune University",
        year_from: "2020-01-20",
        year_to: "2020-01-20",
      },
      {
        name: "MCA",
        institute: "Pune University",
        year_from: "2020-01-20",
        year_to: "2020-01-20",
      },
    ],
    projects: [
      {
        name: "Password Generator",
        stack: "React | Node | Express | MongoDB",
        from: "2020-01-20",
        to: "2020-01-20",
        highlights: [
          "Developed a web application for managing the inventory of a company",
          "Developed a web application for managing the inventory of a company",
          "Developed a web application for managing the inventory of a company",
        ],
      },
    ],
    languages: ["English", "Hindi", "Marathi"],
  });

  const value = {
    editor,
    setEditor,
    // layout,
    // setLayout,
    zoom,
    updateZoom
  };

  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
}
