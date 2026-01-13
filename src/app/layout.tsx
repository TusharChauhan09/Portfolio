import type { Metadata } from "next";
import "./globals.css";
import { neu, lombok, cath, jap, playfair } from "@/lib/font";

import { ThemeProvider } from "@/providers/ThemeProvider";
import ApolloClientProvider from "@/providers/ApolloClientProvider";
import SideScroller from "@/components/Miscellaneous/SideScroller";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neu.variable} ${lombok.variable} ${cath.variable} ${jap.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ApolloClientProvider>
            <SideScroller />
            {children}
          </ApolloClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
