import "./globals.css";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reconciliation",
  description: "",
};

type PropsTypes = {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: PropsTypes) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
