import { RefObject } from "react";

interface props {
  content: string | null;
  id: string;
  open?: boolean | null;
  checked: boolean;
  taskRef?: RefObject<HTMLParagraphElement>;
  taskCardId?: string;
}

export type { props };
