"use client";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { capitalize } from "lodash";
import { usePathname } from "next/navigation";

const AppBreadcrumb = () => {
  const pathname = usePathname();
  const pathSnippets = pathname.split("/").filter((i) => i);
  const breadcrumbs = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      href: url,
      title: capitalize(pathSnippets[index].replace("-", " ")),
    };
  });

  return (
    <Breadcrumb>
      <Breadcrumb.Item key="home">
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
      {breadcrumbs.map((breadcrumb, index) => (
        <Breadcrumb.Item key={breadcrumb.href}>
          <Link href={breadcrumb.href}>{breadcrumb.title}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
