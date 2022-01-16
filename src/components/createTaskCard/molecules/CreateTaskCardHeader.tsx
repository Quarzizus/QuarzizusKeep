import { FormEvent, useContext, useState } from "react";
import { CreateTaskCardContext } from "../context/CreateTaskCardContext";

interface props {
  open: boolean;
}

const CreateTaskCardHeader = ({ open }: props) => {
  const [title, setTitle] = useState("title");
  const { dispatch } = useContext(CreateTaskCardContext);
  return (
    <header>
      <h2
        contentEditable={open}
        suppressContentEditableWarning={true}
        spellCheck={false}
        className="OpenH2"
        onInput={({ target }: FormEvent<HTMLHeadingElement>) => {
          const { textContent } = target as HTMLHeadingElement;
          setTitle(textContent as string);
        }}
        onBlur={() =>
          dispatch({
            type: "SET_TITLE",
            payload: title,
          })
        }
      >
        Title
      </h2>
    </header>
  );
};

export { CreateTaskCardHeader };
