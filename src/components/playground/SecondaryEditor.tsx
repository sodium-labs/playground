"use client";

import { Editor, type OnMount } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/stores/editor";

export enum SecondaryEditorType {
    TranspiledJS,
    TranspiledDeclarations,
}

export default function SecondaryEditor({
    secondaryEditorType,
    setSecondaryEditorType,
    getEditorDidMountHandler,
    ...props
}: React.ComponentProps<"div"> & {
    secondaryEditorType: SecondaryEditorType;
    setSecondaryEditorType: (type: SecondaryEditorType) => void;
    getEditorDidMountHandler: (primary: boolean) => OnMount;
}) {
    const secondaryValue = useEditorStore(state => state.secondaryValue);

    return (
        <div className="h-full" {...props}>
            <div className="flex items-center gap-2 border px-2 py-1">
                <Button
                    variant="ghost"
                    className="px-2"
                    onClick={() => setSecondaryEditorType(SecondaryEditorType.TranspiledJS)}
                >
                    <span
                        className={cn(
                            "text-sm font-light uppercase",
                            secondaryEditorType === SecondaryEditorType.TranspiledJS ? "border-b border-blue-400" : "",
                        )}
                    >
                        Transpiled JS
                    </span>
                </Button>
                <Button
                    variant="ghost"
                    className="px-2"
                    onClick={() => setSecondaryEditorType(SecondaryEditorType.TranspiledDeclarations)}
                >
                    <span
                        className={cn(
                            "text-sm font-light uppercase",
                            secondaryEditorType === SecondaryEditorType.TranspiledDeclarations
                                ? "border-b border-blue-400"
                                : "",
                        )}
                    >
                        Declarations
                    </span>
                </Button>
            </div>
            <Editor
                theme="vs-dark"
                className="min-h-full grow"
                language="javascript"
                value={secondaryValue || ""}
                options={{
                    padding: { top: 5 },
                    codeLens: false,
                    domReadOnly: true,
                    readOnly: true,
                    minimap: {
                        enabled: false,
                    },
                }}
                onMount={getEditorDidMountHandler(false)}
            />
        </div>
    );
}
