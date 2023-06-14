import React, { useState } from "react";

const Faq = ({ children, title, description }) => {
  const [isActive, setIsActive] = useState(false);

  let pipo = isActive ? "active" : "";

  const handleClick = () => setIsActive(!isActive);
  return (
    <div className={`faq ${pipo}`} onClick={handleClick}>
      <div className="question">
        <h3>{title}</h3>
        {children}
      </div>
      <div className="answer">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Faq;
