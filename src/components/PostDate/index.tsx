import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime";

type PostdateProps = {
  dateValue: string;
};

export function Postdate({ dateValue }: PostdateProps) {
  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={dateValue}
      title={formatDatetime(dateValue)}
    >
      {formatDistanceToNow(dateValue)}
    </time>
  );
}
