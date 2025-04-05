"use client";

import { PauseIcon, TriangleIcon } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { type ExecutionResult, ExecutionState, useExecutionStore } from "@/stores/execution";
import { useEditorStore } from "@/stores/editor";
import { transpileTypeScript } from "@/lib/utils";

export default function ExecutionButton() {
    const [value, language] = useEditorStore(useShallow(state => [state.value, state.language]));
    const [executionState, setExecutionResult, setExecutionState] = useExecutionStore(
        useShallow(state => [state.executionState, state.setExecutionResult, state.setExecutionState]),
    );

    const onRun = async () => {
        setExecutionResult(null);
        setExecutionState(ExecutionState.Running);

        let code;
        if (language === "typescript") {
            code = transpileTypeScript("js", value);
            if (code === null) {
                toast("Failed to transpile your TypeScript code");
                return;
            }
        } else {
            code = value;
        }

        try {
            const response = await fetch(
                `https://plume.ptarmigan.xyz/api/exec?language=${encodeURIComponent(
                    language === "typescript" ? "javascript" : language,
                )}&code=${encodeURIComponent(code)}`,
            );

            if (response.status === 429) {
                const retryAfter = response.headers.get("Retry-After");
                toast(`You got rate-limited. Please wait ${retryAfter}s`);
                return;
            }

            if (!response.ok) {
                toast("There was an error trying to execute the code");
                return;
            }

            const result = (await response.json()) as ExecutionResult;
            setExecutionResult(result);
        } catch (err) {
            console.error("Error when running code", err);
        } finally {
            setExecutionState(ExecutionState.Idle);
        }
    };

    return (
        <Button
            variant="outline"
            disabled={executionState === ExecutionState.Running}
            onClick={onRun}
            className="flex items-center rounded-sm"
        >
            {executionState === ExecutionState.Running ? (
                <PauseIcon className="size-3.5 text-zinc-300" />
            ) : (
                <TriangleIcon className="size-3.5 rotate-90 text-zinc-300" />
            )}
            <span>Start</span>
        </Button>
    );
}
