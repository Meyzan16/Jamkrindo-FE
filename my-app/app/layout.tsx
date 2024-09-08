
import { ReactNode } from "react";
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Word Similarity",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            {children}
          </main>
      </body>
    </html>
  );
}
