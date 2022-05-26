import { useState } from 'react'
import { Personal, Experiences, Educations , Skills , Languages, Projects } from './EditorModules'
import Certifications from './EditorModules/Certifications'
import ColorScheme from './EditorModules/ColorScheme'
import { BiBook } from "react-icons/bi"

export function Editor() {
    const [open, setOpen] = useState(false)
    return (
        <section className={`fixed top-[72px] right-0 min-h-screen w-[300px] dark:bg-slate-900 border-l-2 border-l-gray-500 bg-gray-100 z-10 transition-all duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className={` flex justify-center items-center fixed right-full z-20 border-2 border-gray-500 border-r-0 dark:bg-slate-900 bg-gray-100 top-32 p-1 font-xl transition-all duration-300`} onClick={() => setOpen(!open)}>
                <BiBook  size={30} className={"p-1  cursor-pointer"} />
                <svg className={` ${open ? 'rotate-180' : 'rotate-0'} h-5 w-5 `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>
            <div className='p-4 pb-32 max-h-screen  overflow-y-auto '>
                <ColorScheme/>
                <Personal />
                <Skills />
                <Languages />
                <Certifications />
                <Educations />
                <Experiences />
                <Projects />
            </div>
        </section>
    )
}