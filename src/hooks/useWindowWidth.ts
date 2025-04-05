import { useEffect, useState } from "react";

export default function useWindowWidth() {
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        updateWidth();

        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return width;
}
