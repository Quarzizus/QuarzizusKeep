import { useEffect, useRef, useState } from "react";
import { Task } from "../task";
import { CreateTaskCardComponent } from "./styles";

const CreateTaskCard = () => {
  const [open, setOpen] = useState(false);
  const taskRef = useRef<HTMLParagraphElement>(null);
  const handleOpen = (value: boolean) => {
    setOpen(value);
  };
  useEffect(() => {
    open && taskRef.current?.focus();
  }, [open]);
  return (
    <CreateTaskCardComponent>
      {!open ? (
        <h2 onClick={() => handleOpen(true)}>Create one note...</h2>
      ) : (
        <>
          <header>
            <h2
              contentEditable={open}
              suppressContentEditableWarning={true}
              spellCheck={false}
            >
              Title
            </h2>
          </header>
          <Task content="" id="1" open={true} taskRef={taskRef} />
          {/* <p
            ref={taskRef}
            contentEditable={open}
            suppressContentEditableWarning={true}
            spellCheck={false}
          ></p> */}
          {console.log(taskRef)}
          <footer>
            <button onClick={() => handleOpen(false)}>Cerrar</button>
          </footer>
        </>
      )}
    </CreateTaskCardComponent>
  );
};

export { CreateTaskCard };
