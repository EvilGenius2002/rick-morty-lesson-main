import { useState } from "react";

export const Collapse = ({ className, title, content }) => {
  const [open, setOpen] = useState(false);

  function toggle(event) {
    event.stopPropagation();
    setOpen(!open);
  }

  return (
    <div className={className} onClick={(event) => toggle(event)}>
      <h3>{title}</h3>
      {open && content}
    </div>
  );
};
