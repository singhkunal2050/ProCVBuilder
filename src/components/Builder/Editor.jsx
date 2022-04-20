import { useState } from 'react'
import { Personal, Experience, Education, Skills , Languages } from './EditorModules'
import Certifications from './EditorModules/Certifications'
import ColorScheme from './EditorModules/ColorScheme'

export function Editor() {
    const [open, setOpen] = useState(true)
    return (
        <section className={`fixed top-0 right-0 min-h-screen w-[400px] dark:bg-slate-700 bg-white z-10 transition-all duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className={`fixed right-full z-20 dark:bg-slate-700 bg-white top-8 p-1 font-xl transition-all duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>
            <div className='p-4 max-h-screen  overflow-y-auto'>
                <ColorScheme/>
                <Personal />
                <Skills />
                <Languages />
                <Certifications />
                <Experience />
                <Education />
            </div>
        </section>
    )
}