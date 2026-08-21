import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MASTERY — Education Platform",
  description: "Live, mentor-led programs for ambitious builders who want sharper skills, stronger proof, and a community that keeps showing up.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
