/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference types="astro/astro-jsx" />

type MyAttributes = astroHTML.JSX.ImgHTMLAttributes

declare module '*.astro' {
  const Component: Astro.Component
  export default Component
}

type Runtime = import('@astrojs/cloudflare').Runtime<Env>

declare namespace App {
  interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  readonly PUBLIC_APPWRITE_ENDPOINT: string
  readonly PUBLIC_APPWRITE_PROJECT_ID: string
  readonly PUBLIC_APPWRITE_DB_ID: string
  readonly PUBLIC_APPWRITE_BUCKET_ID: string
}
