/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_FIREBASE_API: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_NUMBER: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
