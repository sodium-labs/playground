import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ts from "typescript";

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const transpileTypeScript = (type: "js" | "declarations", value: string): string | null => {
    try {
        const transpiled =
            type === "js"
                ? ts.transpile(value, { fileName: "index.ts", strict: true })
                : ts.transpileDeclaration(value, { fileName: "index.ts" }).outputText;

        return transpiled;
    } catch {
        return null;
    }
};
