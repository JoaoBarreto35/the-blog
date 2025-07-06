import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "qlq coisa";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        imageProps={{
          src: "/images/bryen_5.png",
          width: 1200,
          height: 720,
          alt: "Alt da imagem",
          priority: true,
        }}
        linkProps={{
          href: postLink,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 text-sm/tight block"
          dateTime="2025-04-20"
        >
          20/24/2025 10:00
        </time>

        <PostHeading as="h1" url={postLink}>
          Lorem ipsum dolor sit amet consectetur
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          similique minima soluta aspernatur vitae tenetur sapiente odio, ea
          libero cupiditate fugit. Enim eveniet dolorum commodi consequuntur
          debitis iusto temporibus voluptatum.
        </p>
      </div>
    </section>
  );
}
