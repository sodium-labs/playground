export const EDITOR_CHARACTER_LIMIT = 2000;

interface Language {
    name: string;
    value: string;
}

export const languages: Language[] = [
    {
        name: "TypeScript (Node.js)",
        value: "typescript",
    },
    {
        name: "JavaScript (Node.js)",
        value: "javascript",
    },
    {
        name: "Python",
        value: "python",
    },
    {
        name: "Go",
        value: "go",
    },
    {
        name: "Rust",
        value: "rust",
    },
    {
        name: "Zig",
        value: "zig",
    },
    {
        name: "Java",
        value: "java",
    },
    {
        name: "C++",
        value: "cpp",
    },
    {
        name: "PHP",
        value: "php",
    },
    {
        name: "Lua",
        value: "lua",
    },
];

export const languageKeys = languages.map(l => l.value);
