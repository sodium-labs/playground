"use client";

import { AlignJustifyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import GitHubDropdown from "./GitHubDropdown";
import LanguageDropdown from "./LanguageDropdown";
import ShareDialog from "./ShareDialog";

export default function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                    <AlignJustifyIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-76">
                <SheetHeader>
                    <SheetTitle className="font-mono font-normal tracking-wide">Code Playground</SheetTitle>
                    <SheetDescription>Your code testing playground</SheetDescription>
                </SheetHeader>
                <div className="mx-4 grid w-56 gap-2">
                    <LanguageDropdown className="w-full" />
                    <ShareDialog className="justify-start" />
                    <GitHubDropdown className="justify-start" />
                </div>
            </SheetContent>
        </Sheet>
    );
}
