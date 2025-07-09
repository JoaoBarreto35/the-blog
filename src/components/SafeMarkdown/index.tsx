import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose prose-slate",
        "w-full max-w-none",
        "overflow-hidden",
        "prose-a-transition-colors",
        "prose-a:text-blue-500",
        "prose-a:no-underline",
        "prose-a:hover:text-blue-700",
        "prose-a:hover:underline",
        "prose-img:rounded-lg",
        "prose-img:mx-auto",
        "prose-img:my-4",
        "md-prose-lg"
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
