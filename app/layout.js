import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Farouk Popoola — QA Automation Engineer",
  description:
    "Portfolio of Farouk Popoola, a QA Automation Engineer specializing in web and mobile automation, API testing, and performance testing.",
  keywords: [
    "QA Automation",
    "QA Engineer",
    "Cypress",
    "Playwright",
    "WebDriverIO",
    "API Testing",
    "Performance Testing",
    "Farouk Popoola",
  ],
  authors: [{ name: "Farouk Popoola" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
