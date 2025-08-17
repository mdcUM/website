import { Space_Grotesk, Sora, Azeret_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], weight: "variable", display: "swap" });
const sans    = Sora({          variable: "--font-sans",    subsets: ["latin"], weight: "variable", display: "swap" });
const mono    = Azeret_Mono({   variable: "--font-mono",    subsets: ["latin"], weight: "variable", display: "swap" });

export const metadata = {
  title: "MDC",
  description: "MDC - A Student-Led Tech Consulting Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
