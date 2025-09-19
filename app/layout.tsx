import type { Metadata } from "next";
import { Inter, Roboto} from "next/font/google";
import "./globals.css";
import Header, { LandingNavigation } from "hydravex/app/components/navlink";
import { PathProvider } from "./context";
import { PageTransition } from "./components/animations";
import { Analytics } from "@vercel/analytics/react";
import { seoData } from "./data/siteData";
import CTAAndFooter from "hydravex/app/components/footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({subsets:["latin"], weight:["300","400","500"]})

export const metadata: Metadata = {
    title: seoData.metadata.title,
    description: seoData.metadata.description,
};

export default function RootLayout({
    children, 
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script type="application/ld+json">{JSON.stringify(seoData.structuredData)}</script>
                <meta property="og:title" content={seoData.openGraph.title} />
                <meta property="og:description" content={seoData.openGraph.description}/>
                <meta property="og:image" content={seoData.openGraph.image} />
                <meta property="og:url" content={seoData.openGraph.url} />
                <meta name="keywords" content={seoData.keywords} />
            </head>
            <body className={roboto.className}>
                <PathProvider>
                    <div className="bg-gray-300">
                        <LandingNavigation/>
                        <PageTransition>{children}</PageTransition>
                        <Analytics />
                    </div>
                <div>
                    <CTAAndFooter />
                </div>
                </PathProvider>
            </body>
        </html>
    );
}
