import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "~/components/ui/sonner";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} dark`}>
        <body>
          {children}
          {modal}
        </body>
        <Toaster />
      </html>
    </ClerkProvider>
  );
}
