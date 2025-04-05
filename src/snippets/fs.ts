import { readdir } from "node:fs/promises";

export const SNIPPETS_DIRECTORY = "snippets";

/**
 * Snippet files cache
 */
export let snippetFiles: string[] | null = null;

export const getSnippetFiles = async () => {
    if (snippetFiles) return snippetFiles;

    snippetFiles = await readdir(SNIPPETS_DIRECTORY);
    return snippetFiles;
};

export const addSnippetFile = (filename: string) => {
    snippetFiles?.push(filename);
};
