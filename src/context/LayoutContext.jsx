import { useContext , createContext , useState } from "react";
import template1 from '../assets/resumes/template1.jpg'
import template2 from '../assets/resumes/template2.jpg'

export const LayoutContext = createContext();

export const useLayout = () =>{
    return useContext(LayoutContext);
}

export const layoutCollection = [
  { name: "Professional Template", template : "L1" , thumbnail: template1 },
  { name: "Clean Concise Template",  template : "L2"  ,  thumbnail: template2 },
];

export const LayoutProvider = (props) => {
  const [layout, setLayout] = useState({ name: "Resume Template 1", template : "L1" , thumbnail: template1 });

  const store = {layout,setLayout}

  return (
    <LayoutContext.Provider value={store}>
      {props.children}
    </LayoutContext.Provider>
  )

}