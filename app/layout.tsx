import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body
        className={`dark bg-black text-white ${fontDisplay.variable} ${fontBody.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
