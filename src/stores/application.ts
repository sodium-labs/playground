import { create } from "zustand";

export interface ApplicationStore {
    isSnippet: boolean;
    shareLink: [link: string, createdAt: number] | null;
    setIsSnipped: () => void;
    setShareLink: (link: string | null) => void;
}

export const useApplicationStore = create<ApplicationStore>(set => ({
    isSnippet: false,
    shareLink: null,
    setShareLink: (link: string | null) => set(() => ({ shareLink: link ? [link, Date.now()] : null })),
    setIsSnipped: () => set(() => ({ isSnippet: true })),
}));
