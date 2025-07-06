import { Container } from "@/components/Container";
import PostsList from "@/components/postsList";
import SpinLoader from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold py-8 text-center">HEADER</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-6xl font-bold py-8 text-center">footer</footer>
    </Container>
  );
}
