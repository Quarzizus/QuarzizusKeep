/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_FIREBASE_API: string | undefined;
  VITE_FIREBASE_APP_ID: string;
  VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  VITE_NUMBER: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
