import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Carhub - Discover the best cars in the world",
  description: "Discover the best cars in thw world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Carhub - Discover the best cars in the world</title>
        <meta
          name="title"
          content="Carhub - Discover the best cars in the world"
        />
        <meta name="description" content="Note: this is demo web page" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carhub67.vercel.app/" />
        <meta
          property="og:title"
          content="Carhub - Discover the best cars in the world"
        />
        <meta property="og:description" content="Note: this is demo web page" />
        <meta property="og:image" content="https://i.imgur.com/DWr51uO.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://carhub67.vercel.app/" />
        <meta
          property="twitter:title"
          content="Carhub - Discover the best cars in the world"
        />
        <meta
          property="twitter:description"
          content="Note: this is demo web page"
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/DWr51uO.png"
        />
      </head>
      <body className="relative">
        <NextTopLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
