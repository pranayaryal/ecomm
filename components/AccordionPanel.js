import { AccordionContext } from "./AccordionContext";
import { useRef, useContext } from "react";

const AccordionPanel = ({ children, id }) => {
  const useAccordion = () => useContext(AccordionContext)
  const { selected, toggleItem } = useAccordion();
  const ref = useRef()
  const inlineStyle = 
     selected === id ? { height: ref.current?.scrollHeight, opacity: 10 } : { height: 0, opacity: 100 }
  return (
    <div ref={ref} id={id}
      className="overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600"
      style={inlineStyle}
      >
      {children}
    </div>
  )
};

export default AccordionPanel;