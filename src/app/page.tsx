import { PostFeatured } from "@/components/PostFeatured";
import PostsList from "@/components/postsList";
import SpinLoader from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
