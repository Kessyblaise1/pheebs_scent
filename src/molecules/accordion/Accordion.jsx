import { useState } from "react";
import "./Accordion.css"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Accordion({ title, children, itemCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantity = itemCount;

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`} style={{ "--quantity": quantity }}>
      <button className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className="icon">{isOpen ? <ChevronUpIcon className="size-5" /> : <ChevronDownIcon className="size-5" />}</span>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>{children}</div>
    </div>
  );
}
