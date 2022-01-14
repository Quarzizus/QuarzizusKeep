import { WrapperTaskCardComponent } from "./styles";

interface props {
  children: JSX.Element | JSX.Element[];
  open: boolean | null;
  setNodeRef: (node: HTMLElement | null) => void;
  style: {
    transform: string | undefined;
    transition: string | undefined;
  };
}

const WrapperTaskCard = ({ children, open, setNodeRef, style }: props) => {
  return (
    <WrapperTaskCardComponent open={open} ref={setNodeRef} style={style}>
      {children}
    </WrapperTaskCardComponent>
  );
};

export { WrapperTaskCard };
