import { readFile } from "node:fs/promises";
import Playground from "@/components/playground/Playground";
import { getSnippetFiles, SNIPPETS_DIRECTORY } from "@/snippets/fs";
import { snippetSchema } from "@/snippets/schema";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;

    let files;
    try {
        files = await getSnippetFiles();
    } catch (err) {
        console.error(err);
        return new Response(null, { status: 500 });
    }

    const filename = `${id}.json`;
    if (!files.includes(filename)) {
        return new Response(null, { status: 404 });
    }

    let snippet;
    try {
        const file = (await readFile(`${SNIPPETS_DIRECTORY}/${filename}`)).toString();
        const json = JSON.parse(file);
        snippet = snippetSchema.parse(json);
    } catch (err) {
        console.error(err);
        return new Response(null, { status: 500 });
    }

    return <Playground snippet={snippet} />;
};
