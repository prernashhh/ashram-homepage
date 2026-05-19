import { Inter, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const stix = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Homepage",
  description: "Figma Homepage Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${stix.variable}`}>
        {children}
      </body>
    </html>
  );
}