import type { Metadata } from "next";
import { Inter, Roboto} from "next/font/google";
import "./globals.css";
import Header from "hydravex/app/components/navlink";
import Footer from "hydravex/app/components/footer";
import { PathProvider } from "./context";
import { PageTransition } from "./components/animations";
import { Analytics } from "@vercel/analytics/react";
import { seoData } from "./data/siteData";


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
                    <div className="sticky top-0 z-50">
                        <Header url="" />
                    </div>
                    <div className="bg-gray-300">
                        <PageTransition>{children}</PageTransition>
                        <Analytics />
                    </div>
                <div>
                    <Footer />
                </div>
                </PathProvider>
            </body>
        </html>
    );
}
