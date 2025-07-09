import { PostHeading } from "../PostHeading";
import { Postdate } from "../PostDate";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      {/* <time
        className="text-slate-600 text-sm/tight block"
        dateTime={createdAt}
        title={formatDatetime(createdAt)}
      >
        {formatDistanceToNow(createdAt)}
      </time> */}
      <Postdate dateValue={createdAt} />

      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
