import "./globals.css";
import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Newsletter Sign-up",
  description: "Nextjs test project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-char-grey h-screen flex justify-center items-center`}
      >
        {children}
      </body>
    </html>
  );
}
