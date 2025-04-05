import { type Monaco } from "@monaco-editor/react";

export const initializeMonaco = (monaco: Monaco) => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib("declare module 'node:*';", "file:///node-modules.d.ts");
};
