"use client";

import ErrorMessage from "@/components/ErrorMessage";

export default function RootErrorPage() {
  return (
    <ErrorMessage
      pageTitle="Slug"
      contentTitle="ERROR"
      content="Problema na Slug"
    />
  );
}
