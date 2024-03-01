import HeaderComponent from "./components/HeaderNavbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maker_Blog",
  description: "Generated by 420QUEEN & DAMAKER",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      <body className={inter.className}>
      <div className="z-10 w-full justify-between font-mono text-sm h-screen">
      <nav className="xl:max-w-5xl left-0 top-0 flex w-full border-b border-gray-300 color-change-2x from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static lg:rounded-xl lg:border lg:px-4">
          <HeaderComponent/>
        </nav>
        {children}
        </div>
        </body>
    </html>
  );
}
