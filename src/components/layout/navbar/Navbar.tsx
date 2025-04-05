import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import SodiumLabsIcon from "@/icons/brands/SodiumLabsIcon";
import LanguageDropdown from "./LanguageDropdown";
import GitHubDropdown from "./GitHubDropdown";
import ShareDialog from "./ShareDialog";
import Sidebar from "./Sidebar";
import ExecutionStateBadge from "./ExecutionStateBadge";
import ExecutionButton from "./ExecutionButton";

export default function Navbar() {
    return (
        <nav className="flex h-[var(--navbar-height)] items-center justify-between border-b border-zinc-700 px-3 md:px-4 lg:px-8">
            <div className="flex h-[40%] items-center gap-2">
                <Link href="/" className="cascadia-code flex items-center gap-2">
                    <SodiumLabsIcon className="size-7" />
                    <span className="max-lg:hidden">Code Playground</span>
                </Link>

                <Separator orientation="vertical" className="max-md:hidden" />

                <LanguageDropdown className="max-md:hidden" />
            </div>

            <div className="flex h-[40%] items-center gap-2">
                <ExecutionStateBadge />
                <ExecutionButton />
                <ShareDialog className="max-md:hidden" />

                <Separator orientation="vertical" />

                <GitHubDropdown className="max-md:hidden" />
                <Sidebar />
            </div>
        </nav>
    );
}
