import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plate Palette",
  description: "A recipe website",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script src='https://kit.fontawesome.com/bafe0bdc31.js' crossorigin='anonymous'></script>
        <link rel='icon' type='image/x-icon' href='/public/assets/logo.svg' />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
