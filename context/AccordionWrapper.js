import { useCallback, useContext, useState } from "react";
import { AccordionContext } from "./AccordionContext";

const AccordionWrapper = ({ children }) => {
  const [selected, setSelected] = useState()

  const toggleItem = useCallback((id) => () => {
    setSelected((prevState) => (prevState !== id ? id : ''))

  })
  return (
    <AccordionContext.Provider value={{ selected, toggleItem }}>
      {children}
    </AccordionContext.Provider>

  )
};

export default AccordionWrapper;