import "./globals.css";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ReduxProvider from "@/lib/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Name",
  description: "",
};

type PropsTypes = {
  readonly children: React.ReactNode;
};

export default function RootLayout({ children }: PropsTypes) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-auto`}>
        <ReduxProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
