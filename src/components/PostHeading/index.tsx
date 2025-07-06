import Link from "next/link";
import React from "react";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight font-extrabold sm:text-4xl",
    h2: "text-2xl/tight font-bold ",
  };

  return (
    <h1 className={headingClassesMap[Tag]}>
      <Link className="group-hover:text-slate-600" href={url}>
        <Tag>{children}</Tag>
      </Link>
    </h1>
  );
}
