import { RefObject } from "react";

interface props {
  content: string | null;
  id: string;
  checked?: boolean;
  open?: boolean | null;
  taskRef?: RefObject<HTMLParagraphElement>;
  taskCardId?: string;
  children?: JSX.Element | JSX.Element[];
}

export type { props };
