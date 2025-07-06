import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostFeatured } from "@/components/PostFeatured";
import PostsList from "@/components/postsList";
import SpinLoader from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense>
        <PostFeatured />
      </Suspense>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-6xl font-bold py-8 text-center">footer</footer>
    </Container>
  );
}
