interface props {
  handleClick: (value: boolean) => void;
}

const TaskCardFooter = ({ handleClick }: props) => {
  return (
    <footer>
      <button
        type="button"
        onClick={() => {
          handleClick(false);
        }}
      >
        Cerrar
      </button>
    </footer>
  );
};

export { TaskCardFooter };
