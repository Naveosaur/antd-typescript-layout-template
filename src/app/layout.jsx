import "./globals.css";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reconciliation",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${inter.className} overflow-hidden`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
