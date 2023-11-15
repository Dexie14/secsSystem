import { DM_Sans } from "next/font/google";
// import { Dancing_Script } from "next/font/google";
import "./globals.css";

const DMSans = DM_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Secs System",
  description: "Official SecsSystem Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/assets/home/logo.svg" />
      </head>
      <body className={DMSans.className} style={{fontFamily: "DMSansMedium"}}>{children}</body>
    </html>
  );
}
