import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NODE_ENV === "production" ? "https://playground.sodiumlabs.xyz" : "http://localhost:3000",
    ),
    title: "Code Playground",
    description: "Quickly test code snippets in your browser, whenever you need.",
    keywords: ["programming", "development", "dev", "code", "playground", "play", "test"],
    twitter: {
        card: "summary_large_image",
    },
    openGraph: {
        title: "Code Playground",
        type: "website",
        description: "Quickly test code snippets in your browser, whenever you need.",
    },
};

export const viewport: Viewport = {
    themeColor: "#f5f4f4",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
