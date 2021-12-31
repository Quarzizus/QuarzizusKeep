import { Dispatch, SetStateAction } from "react";

interface Credentials {
  email: string;
  password: string;
}
type setError = Dispatch<SetStateAction<any>>;

interface FormContextProps {
  register: {
    message: string;
    button: string;
    onClick: ({ credentials }: { credentials: Credentials }) => Promise<void>;
  };
  signin: {
    message: string;
    button: string;
    onClick: ({ credentials }: { credentials: Credentials }) => Promise<void>;
  };
  error: any;
  handleSubmitWithGoogle: ({ e }: { e: MouseEvent }) => Promise<void>;
}

export type { Credentials, setError, FormContextProps };
