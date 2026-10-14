import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raghav Bharti — Video Editor & Motion Designer",
  description: "A cinematic editing portfolio for film, brand and social stories.",
  openGraph: { title: "Raghav Bharti — Video Editor & Motion Designer", description: "Creating what is worth remembering.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
