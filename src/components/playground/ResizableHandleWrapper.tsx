"use client";

import { useState } from "react";
import { ResizableHandle } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

export default function ResizableHandleWrapper() {
    const [isDraggingResizeHandle, setIsDraggingResizeHandle] = useState(false);

    return (
        <ResizableHandle
            className={cn(
                "z-10 bg-zinc-700",
                isDraggingResizeHandle ? "bg-blue-400 outline-blue-400" : "outline-transparent",
                "outline-2 transition duration-300 hover:bg-blue-400 hover:outline-blue-400",
            )}
            onDragging={isDragging => {
                setIsDraggingResizeHandle(isDragging);
            }}
        />
    );
}
