import { createContext, useContext, useState } from "react";

export const EditorContext = createContext();

export const useEditor = () => {
  return useContext(EditorContext);
};

export function EditorProvider(props) {
  const [zoom, setZoom] = useState(0.9);

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
    hightlights: "",
  });

  const downloadEditorState = async () => {
    const download = {
      ...editor,
    };
    const href = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(download)
    )}`;
    const link = document.createElement("a");
    link.href = href;
    link.download = "cv.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(download);
  };

  const uploadEditorState = (e) => {
    console.log(e.target.files[0])
    let reader = new FileReader();
    reader.onload = logFile;
    reader.readAsText(e.target.files[0]);
  } 
  
  function logFile (event) {
    let str = event.target.result;
    let json = JSON.parse(str);
    console.log(json)
    setEditor(json)
    // setEditor(...json)
  }

  const value = {
    editor,
    setEditor,
    zoom,
    updateZoom,
    downloadEditorState,
    uploadEditorState
  };

  return (
    <EditorContext.Provider value={value}>
      {props.children}
    </EditorContext.Provider>
  );
}
