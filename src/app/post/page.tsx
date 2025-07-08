import PostsList from "@/components/postsList";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";

export default function PostPage() {
  return (
    <Suspense fallback={<SpinLoader />}>
      <PostsList />
    </Suspense>
  );
}
