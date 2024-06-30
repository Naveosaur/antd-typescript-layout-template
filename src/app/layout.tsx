import "./globals.css";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// import ReduxProvider from "@/lib/redux/ReduxProvider";
import StoreProvider from "@/lib/redux/Provider";

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
        <StoreProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
