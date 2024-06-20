import { Poppins } from "next/font/google"; // Importar Poppins do Google Fonts
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
