import { RefObject } from "react";

interface props {
  content: string | null;
  id: string;
  open: boolean;
  checked?: boolean;
  taskRef?: RefObject<HTMLParagraphElement>;
}

export type { props };
