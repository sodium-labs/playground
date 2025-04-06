import type { MetadataRoute } from "next";
import { BASE_URL } from "@/config/links";

export default (): MetadataRoute.Sitemap => {
    return [
        {
            url: BASE_URL,
            priority: 1,
            lastModified: new Date(1743958704895),
        },
    ];
};
