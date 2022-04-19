import { createContext, useContext, useState } from "react";

export const EditorCotext = createContext()

export const useEditor = () => {
    return useContext(EditorCotext)
}

export function EditorProvider(props) {

    const [layout, setLayout] = useState("L1")

    const [editor, setEditor] = useState({
        personal: {
            firstname: "Mike",
            lastname: "Alpha",
            email: "mikealpha@gmail.com",
            phone: "9999999999",
            website : "demo.com",
            facebookLink : "facebook.com",
            twitterLink : "twitter.com",
            linkedinLink : "linkedin.com",
            githubLink : "github.com",
        },
        skills: ['HTML'  ]
    })


    const value = {
        editor,
        setEditor,
        layout, setLayout
    }

    return <EditorCotext.Provider value={value}>
        {props.children}
    </EditorCotext.Provider>
}