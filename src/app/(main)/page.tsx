import type { Metadata } from "next";
import Playground from "@/components/playground/Playground";

export const metadata: Metadata = {
    openGraph: {
        images: [
            {
                url: "/assets/images/banner.png",
            },
        ],
    },
};

export default () => {
    return <Playground />;
};
