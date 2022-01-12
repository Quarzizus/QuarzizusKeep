import { Dispatch, FormEvent, SetStateAction } from "react";

interface props {
  open: boolean;
  setTitle: Dispatch<SetStateAction<string>>;
}

const CreateTaskCardHeader = ({ open, setTitle }: props) => {
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
      >
        Title
      </h2>
    </header>
  );
};

export { CreateTaskCardHeader };
