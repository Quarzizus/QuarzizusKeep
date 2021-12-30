import { Dispatch, SetStateAction } from "react";

interface Credentials {
  email: string;
  password: string;
}
type setError = Dispatch<SetStateAction<any>>;

export type { Credentials, setError };
