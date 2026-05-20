import type { Metadata } from "next";
import { BankProvider } from "@/context/BankContext";
import LayoutContent from "./layout-content";

export const metadata: Metadata = {
  title: "Wells Fargo - Online Banking",
  description: "Secure online banking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BankProvider>
      <LayoutContent>{children}</LayoutContent>
    </BankProvider>
  );
}
