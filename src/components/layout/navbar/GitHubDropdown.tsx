"use client";

import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { REPOSITORY_URL, SODIUM_LABS_GITHUB_URL } from "@/config/links";
import GitHubIcon from "@/icons/brands/GithubIcon";

export default function GitHubDropdown({ className }: { className?: string }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className={className}>
                    <span>Open Source</span>
                    <GitHubIcon className="size-3.5" />
                    <ChevronDownIcon className="text-zinc-400" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
                            sodium-labs/playground
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="tracking-wide">
                        <a href={SODIUM_LABS_GITHUB_URL} target="_blank" rel="noreferrer">
                            View all projects
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
