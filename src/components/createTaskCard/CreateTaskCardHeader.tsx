interface props {
  open: boolean;
}

const CreateTaskCardHeader = ({ open }: props) => {
  return (
    <header>
      <h2
        contentEditable={open}
        suppressContentEditableWarning={true}
        spellCheck={false}
        className="OpenH2"
      >
        Title
      </h2>
    </header>
  );
};

export { CreateTaskCardHeader };
