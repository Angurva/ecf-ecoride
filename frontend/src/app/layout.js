import SessionWrapper from "../../components/SessionWrapper";
import { UserProvider } from "../../components/UserContext";

import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from 'react-toastify';


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecoride",
  description: "Le covoiturage écologique",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="fr">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>


          <div className="min-h-screen w-full p-0 m-0 flex flex-col text-white bg-slate-100">
            <UserProvider>
              <header className="bg-sky-600 sticky top-0 w-full shadow">
                <Navbar/>
              </header>
              <main className="grow">
                <ToastContainer/>
                {children}
              </main>
              <footer className="md:mt-auto bg-sky-600 w-full shadow py-4">
                <Footer />
              </footer>
            </UserProvider>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
