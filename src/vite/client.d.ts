/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_INNER_WEBSITE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
