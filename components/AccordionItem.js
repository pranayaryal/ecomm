import { useContext } from "react";
import { AccordionContext } from "./AccordionContext";

const AccordionItem = ({ toggle, children, className }) => {
  const useAccordion = () => useContext(AccordionContext)
  const { selected, toggleItem } = useAccordion()
  console.log(selected)
  return (
    <div
      onClick={toggleItem(toggle)}
      className={'block font-light border-t text-xl md:text-3xl border-t-gray-300 cursor-pointer py-[1.5rem] px-0 ' + className}
    >
      {children}

    </div>
  )
};

export default AccordionItem;