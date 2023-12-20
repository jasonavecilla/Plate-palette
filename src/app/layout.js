import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plate Palette",
  description: "A recipe website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/bafe0bdc31.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" type="image/x-icon" href="/public/assets/logo.svg" />
      </head>
      <body className={inter.className}>

          <NavBar />
          {children}
          <Footer />

      </body>
    </html>
  );
}
