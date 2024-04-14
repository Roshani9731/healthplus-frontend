import "./globals.css";
import type { Metadata } from "next";
import RootStyleRegistry from "./emotion";
import { Notifications } from "@/components/mantine.helper";

export const metadata: Metadata = {
  title: "Health Center",
  description: "Portal for Health Center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <Notifications />
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
