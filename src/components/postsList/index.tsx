import { findAllPublicPosts } from "@/lib/post/queries";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export default async function PostsList() {
  const posts = await findAllPublicPosts();
  return (
    <div className="grid grid-cols-1 mb-16 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: "Alt da imagem",
                priority: true,
              }}
              linkProps={{
                href: postLink,
              }}
            />
            <PostSummary
              postHeading="h2"
              postLink={postLink}
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
